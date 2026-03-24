import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

// ============================================================================
// File Upload Types (consumer-provided)
// ============================================================================

/**
 * Result of a file upload operation.
 * `value` is the identifier stored as the form value (e.g. a signedId, URL, or any string).
 */
export type FileUploadResult =
  | { type: "success"; value: string }
  | { type: "aborted" }

/**
 * Upload status states
 */
export type FileUploadStatus = "idle" | "processing" | "uploading" | "success"

/**
 * Return type of the consumer-provided upload hook
 */
export interface FileUploadHookReturn {
  /** Uploads a file and returns the result */
  upload: (file: File) => Promise<FileUploadResult>
  /** Cancels the in-flight upload */
  cancelUpload?: () => void
  /** Upload progress from 0 to 1 */
  progress: number
  /** Current upload status */
  status: FileUploadStatus
}

/**
 * A hook that returns upload capabilities for a single file.
 * Each call creates an independent upload instance with its own state.
 *
 * @example
 * ```tsx
 * const useMyUpload: UseFileUpload = () => {
 *   const { upload, progress, status, cancelUpload } = useDirectUpload({
 *     resourceType: "MyModule::Document",
 *   })
 *   return { upload, progress, status, cancelUpload }
 * }
 * ```
 */
export type UseFileUpload = () => FileUploadHookReturn

// ============================================================================
// File Field RenderIf Conditions
// ============================================================================

/**
 * All valid renderIf conditions for file fields
 */
export type FileFieldRenderIf =
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// MIME Type
// ============================================================================

/**
 * Known MIME types for the file field `accept` prop.
 *
 * Supports three formats:
 * - Specific types: `"image/png"`, `"application/pdf"`
 * - Wildcard categories: `"image/*"`, `"video/*"`
 * - Bare categories (shorthand for wildcard): `"image"`, `"video"`
 *
 * The `string & {}` escape hatch allows unlisted MIME types while
 * still providing autocomplete for known ones.
 */
export type MimeType =
  // Bare category shorthands (normalized to wildcard at runtime)
  | "image"
  | "video"
  | "audio"
  | "text"
  | "application"
  // Wildcard categories
  | "image/*"
  | "video/*"
  | "audio/*"
  | "text/*"
  | "application/*"
  // Images
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/webp"
  | "image/svg+xml"
  | "image/heic"
  | "image/bmp"
  | "image/tiff"
  | "image/avif"
  // Videos
  | "video/mp4"
  | "video/webm"
  | "video/quicktime"
  // Audio
  | "audio/mpeg"
  | "audio/ogg"
  | "audio/wav"
  // Documents
  | "application/pdf"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/zip"
  | "application/json"
  // Text
  | "text/plain"
  | "text/csv"
  | "text/html"
  | "text/markdown"

// ============================================================================
// Initial File (pre-existing)
// ============================================================================

/**
 * Metadata for a file that already exists (e.g. from a previous upload).
 * Passed via `initialFiles` so the field can display it without re-uploading.
 */
export interface InitialFile {
  /** The identifier that matches the form's default value (signedId, URL, etc.) */
  value: string
  /** Display name (e.g. "report.pdf") */
  name: string
  /** MIME type for icon display (e.g. "application/pdf") */
  type?: string
  /** File size in bytes */
  size?: number
}

// ============================================================================
// File Field Config and Type
// ============================================================================

/**
 * F0 config options specific to file fields
 */
export interface F0FileConfig {
  /**
   * Accepted MIME types.
   *
   * @example
   * accept: ["image"]                       // all image types
   * accept: ["image/png", "image/jpeg"]     // specific types
   * accept: ["image", "application/pdf"]    // mix of category and specific
   */
  accept?: MimeType[]
  /** Maximum file size in megabytes (per file) */
  maxSizeMB?: number
  /** Allow multiple file uploads (form value becomes `string[]`) */
  multiple?: boolean
  /** Helper text shown in the dropzone area */
  description?: string
}

/**
 * File field with all properties for rendering (runtime type)
 */
export type F0FileField = F0BaseField & {
  type: "file"
  /** Accepted MIME types */
  accept?: MimeType[]
  /** Maximum file size in megabytes */
  maxSizeMB?: number
  /** Allow multiple files */
  multiple?: boolean
  /** Dropzone description text */
  description?: string
  /** Conditional rendering */
  renderIf?: FileFieldRenderIf
}

/**
 * Metadata for a file that has been selected, uploaded, or pre-existing
 */
export interface FileEntry {
  /** Unique key for React list rendering */
  key: string
  /** The File object — present for new uploads, absent for pre-existing files */
  file?: File
  /** Pre-existing file metadata — present when seeded from `initialFiles` */
  initialFile?: InitialFile
  /** The form value returned after successful upload, or from initialFile */
  value?: string
  /** Error message if upload failed */
  error?: string
}

/**
 * Props for the FileUploadItem component
 */
export interface FileUploadItemProps {
  /** The file entry (new upload or pre-existing) */
  entry: FileEntry
  /** Consumer-provided upload hook — only needed for new uploads */
  useUpload?: UseFileUpload
  /** Called when upload completes successfully with the form value */
  onUploadComplete: (value: string) => void
  /** Called when the file is removed (cancels upload if in progress) */
  onRemove: () => void
  /** Called when upload fails */
  onError: (error: string) => void
  /** Whether the field is disabled */
  disabled?: boolean
  /** i18n strings */
  translations: {
    remove: string
    uploading: string
    processing: string
    uploadFailed: string
  }
}
