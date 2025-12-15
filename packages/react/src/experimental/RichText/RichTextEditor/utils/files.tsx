import { FILE_TYPES } from "./constants"
import { filesConfig } from "./types"

const handleAddFiles = (
  newFiles: File[],
  files: File[],
  filesConfig: filesConfig | undefined,
  setFiles: (files: File[]) => void
) => {
  if (filesConfig) {
    const updatedFiles = filesConfig.multipleFiles ? [...files, ...newFiles] : newFiles
    setFiles(updatedFiles)
    filesConfig.onFiles(updatedFiles)
  }
}

const handleRemoveFile = (
  fileIndex: number,
  files: File[],
  filesConfig: filesConfig | undefined,
  setFiles: (files: File[]) => void
) => {
  if (filesConfig) {
    const updatedFiles = [...files]
    updatedFiles.splice(fileIndex, 1)
    setFiles(updatedFiles)
    filesConfig.onFiles(updatedFiles)
  }
}

const getAcceptFileTypeString = (filesConfig: filesConfig | undefined): string => {
  if (filesConfig?.acceptedFileType && filesConfig.acceptedFileType.length > 0) {
    return filesConfig.acceptedFileType
      .map((type) => {
        switch (type) {
          case FILE_TYPES.IMAGE:
            return "image/*"
          case FILE_TYPES.VIDEO:
            return "video/*"
          case FILE_TYPES.PDF:
            return "application/pdf"
          case FILE_TYPES.DOC:
            return "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          case FILE_TYPES.EXCEL:
            return "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          case FILE_TYPES.PPT:
            return "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation"
          case FILE_TYPES.TXT:
            return "text/plain"
          case FILE_TYPES.AUDIO:
            return "audio/*"
          case FILE_TYPES.ARCHIVE:
            return ".zip,.rar,.tar,.gz,.7z"
          case FILE_TYPES.CSV:
            return "text/csv"
          case FILE_TYPES.HTML:
            return "text/html"
          case FILE_TYPES.MARKDOWN:
            return "text/markdown"
          default:
            return ""
        }
      })
      .filter(Boolean)
      .join(", ")
  }
  return "*"
}

export { getAcceptFileTypeString, handleAddFiles, handleRemoveFile }
