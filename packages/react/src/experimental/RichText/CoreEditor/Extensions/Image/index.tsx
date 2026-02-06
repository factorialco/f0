import type { Editor } from "@tiptap/core";

import { mergeAttributes } from "@tiptap/core";
import { FileHandler } from "@tiptap/extension-file-handler";
import { Image } from "@tiptap/extension-image";
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react";

import { F0Button } from "@/components/F0Button";
import { Spinner } from "@/ui/Spinner";
import { Delete } from "@/icons/app";
import { useI18n } from "@/lib/providers/i18n";
import { cn } from "@/lib/utils";

export type ImageUploadErrorType =
  | "file-too-large"
  | "invalid-type"
  | "upload-failed";

export interface ImageUploadConfig {
  onUpload: (file: File) => Promise<{ url: string; signedId?: string }>;
  maxFileSize?: number;
  onError?: (errorType: ImageUploadErrorType) => void;
}

const DEFAULT_MAX_SIZE = 15 * 1024 * 1024; // 15MB
export const DEFAULT_ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

const ImageNodeView = ({
  node,
  deleteNode,
  selected,
  editor,
}: NodeViewProps) => {
  const { src, alt, title, uploading } = node.attrs;
  const isEditable = editor.isEditable;
  const translations = useI18n();
  return (
    <NodeViewWrapper className="mb-2">
      <div
        className={cn(
          "relative inline-block rounded-lg",
          selected && "border-2 border-f1-border-selected-bold border-solid",
        )}
      >
        <img
          src={src}
          alt={alt}
          title={title}
          draggable={false}
          className="block h-auto w-full rounded-md transition-all duration-150 ease-out"
        />
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200">
            <Spinner size="medium" />
          </div>
        )}
        {isEditable && !uploading && (
          <div className="dark absolute right-2 top-2">
            <F0Button
              onClick={deleteNode}
              label={translations.actions.delete}
              icon={Delete}
              variant="outline"
              hideLabel
              size="sm"
            />
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
};

export const ImageExtension = Image.extend({
  addAttributes() {
    // We need it to track the uploading state and visual feedback
    return {
      ...this.parent?.(),
      uploading: {
        default: false,
        renderHTML: () => ({}),
        parseHTML: () => false,
      },
      "data-upload-id": {
        default: null,
        renderHTML: () => ({}),
        parseHTML: () => null,
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ImageNodeView);
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
}).configure({
  inline: false,
  allowBase64: true,
});

const handleImageUpload = async (
  editor: Editor,
  file: File,
  uploadConfig: ImageUploadConfig,
  pos?: number,
) => {
  const maxSize = uploadConfig.maxFileSize ?? DEFAULT_MAX_SIZE;
  const { onError } = uploadConfig;

  // Validate file type
  if (!DEFAULT_ACCEPTED_TYPES.includes(file.type)) {
    onError?.("invalid-type");
    return;
  }

  // Validate file size
  if (file.size > maxSize) {
    onError?.("file-too-large");
    return;
  }

  // Create a local preview to make a smoother experience for the user
  const previewUrl = URL.createObjectURL(file);
  const uploadId = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const insertPos = pos ?? editor.state.selection.anchor;
  editor
    .chain()
    .focus()
    .insertContentAt(insertPos, [
      {
        type: "image",
        attrs: {
          src: previewUrl,
          alt: file.name,
          uploading: true,
          "data-upload-id": uploadId,
        },
      },
    ])
    .run();

  try {
    const { url } = await uploadConfig.onUpload(file);

    // We need to udpate the URL local with the URL from the server
    const { doc } = editor.state;
    let nodePos: number | null = null;

    doc.descendants((node, position) => {
      if (
        node.type.name === "image" &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        nodePos = position;
        return false;
      }
      return true;
    });

    if (nodePos !== null) {
      editor
        .chain()
        .setNodeSelection(nodePos)
        .updateAttributes("image", {
          src: url,
          uploading: false,
          "data-upload-id": null,
        })
        .run();
    }
  } catch {
    onError?.("upload-failed");

    // Remove the placeholder on failure
    const { doc } = editor.state;
    doc.descendants((node, position) => {
      if (
        node.type.name === "image" &&
        node.attrs["data-upload-id"] === uploadId
      ) {
        editor.chain().setNodeSelection(position).deleteSelection().run();
        return false;
      }
      return true;
    });
  } finally {
    // Clean up the blob URL
    URL.revokeObjectURL(previewUrl);
  }
};

export const createFileHandlerExtension = (uploadConfig: ImageUploadConfig) =>
  FileHandler.configure({
    allowedMimeTypes: DEFAULT_ACCEPTED_TYPES,
    onDrop: (currentEditor, files, pos) => {
      files.forEach((file) => {
        handleImageUpload(currentEditor, file, uploadConfig, pos);
      });
    },
    onPaste: (currentEditor, files) => {
      files.forEach((file) => {
        handleImageUpload(currentEditor, file, uploadConfig);
      });
    },
  });

export const insertImageFromFile = (
  editor: Editor,
  file: File,
  uploadConfig: ImageUploadConfig,
) => {
  handleImageUpload(editor, file, uploadConfig);
};
