import { Editor, type JSONContent } from "@tiptap/core";
import { afterEach, describe, expect, it } from "vitest";

import { StarterKitExtension } from "../StarterKit";
import {
  BlockIdExtension,
  documentHasMissingBlockIds,
  isBlockNodeType,
} from "./index";

describe("isBlockNodeType", () => {
  it("returns true for supported block-id node types", () => {
    expect(isBlockNodeType("paragraph")).toBe(true);
    expect(isBlockNodeType("details")).toBe(true);
  });

  it("returns false for unsupported or nullish node types", () => {
    expect(isBlockNodeType("mention")).toBe(false);
    expect(isBlockNodeType(null)).toBe(false);
    expect(isBlockNodeType(undefined)).toBe(false);
  });
});

describe("documentHasMissingBlockIds", () => {
  const editors: Editor[] = [];

  afterEach(() => {
    editors.forEach((editor) => editor.destroy());
    editors.length = 0;
  });

  const createEditor = (content: JSONContent) => {
    const editor = new Editor({
      extensions: [StarterKitExtension, BlockIdExtension],
      content,
    });

    editors.push(editor);

    return editor;
  };

  it("returns true for ProseMirror documents with missing block ids", () => {
    const editor = createEditor({
      type: "doc",
      content: [
        {
          type: "paragraph",
          attrs: { id: null },
          content: [{ type: "text", text: "Legacy paragraph" }],
        },
      ],
    });

    expect(documentHasMissingBlockIds(editor.state.doc)).toBe(true);
  });

  it("returns false for JSON documents when all block ids are present", () => {
    expect(
      documentHasMissingBlockIds({
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { id: "heading-1", level: 1 },
            content: [{ type: "text", text: "Title" }],
          },
          {
            type: "paragraph",
            attrs: { id: "paragraph-1" },
            content: [{ type: "text", text: "Body" }],
          },
        ],
      }),
    ).toBe(false);
  });

  it("returns false for ProseMirror documents when all block ids are present", () => {
    const editor = createEditor({
      type: "doc",
      content: [
        {
          type: "paragraph",
          attrs: { id: "paragraph-1" },
          content: [{ type: "text", text: "Healthy paragraph" }],
        },
      ],
    });

    expect(documentHasMissingBlockIds(editor.state.doc)).toBe(false);
  });

  it("returns true when nested block nodes have falsy ids", () => {
    expect(
      documentHasMissingBlockIds({
        type: "doc",
        content: [
          {
            type: "bulletList",
            attrs: { id: "list-1" },
            content: [
              {
                type: "listItem",
                attrs: { id: "" },
                content: [
                  {
                    type: "paragraph",
                    attrs: { id: "paragraph-1" },
                    content: [{ type: "text", text: "Nested item" }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ).toBe(true);
  });

  it("returns false for nullish input", () => {
    expect(documentHasMissingBlockIds(null)).toBe(false);
    expect(documentHasMissingBlockIds(undefined)).toBe(false);
  });
});
