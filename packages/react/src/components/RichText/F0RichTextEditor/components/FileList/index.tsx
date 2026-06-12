import { AnimatePresence, motion } from "motion/react"

import { F0FileItem } from "@/components/F0FileItem"

import { UPLOAD_INPUT_ID } from "../../utils/constants"
import {
  getAcceptFileTypeString,
  handleAddFiles,
  handleRemoveFile,
} from "../../utils/files"
import { filesConfig } from "../../utils/types"

interface FileListProps {
  filesConfig: filesConfig | undefined
  files: File[]
  disabled: boolean
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
  fileInputRef: React.RefObject<HTMLInputElement>
}

const FileList = ({
  filesConfig,
  files,
  setFiles,
  disabled,
  fileInputRef,
}: FileListProps) => {
  if (!filesConfig) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      let fileArray = Array.from(selectedFiles)
      if (filesConfig?.maxFileSize) {
        fileArray = fileArray.filter(
          (file) => file.size <= filesConfig.maxFileSize!
        )
      }
      handleAddFiles(fileArray, files, filesConfig, setFiles)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <>
      <input
        id={UPLOAD_INPUT_ID}
        type="file"
        multiple={filesConfig.multipleFiles}
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        accept={getAcceptFileTypeString(filesConfig)}
        aria-label="Upload file"
      />
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            key="filelist-accordion"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="scrollbar-macos flex w-full items-end gap-2 overflow-x-auto pt-2">
              {files.map((file, index) => (
                <F0FileItem
                  key={`${file.name}-${index}`}
                  file={file}
                  actions={[
                    {
                      label: "Delete",
                      onClick: () =>
                        handleRemoveFile(index, files, filesConfig, setFiles),
                    },
                  ]}
                  disabled={disabled}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { FileList }
