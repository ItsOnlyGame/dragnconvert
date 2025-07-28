import { useCallback, type Dispatch, type SetStateAction } from 'react'
import { useDropzone, type Accept, type FileRejection } from 'react-dropzone'
import { toast } from '../ui/sonner'

type FileDropzoneProps = {
  setAcceptedFiles: Dispatch<SetStateAction<File[]>>
  accept: Accept
}
export function FileDropzone({ setAcceptedFiles, accept }: FileDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles.length !== 0) {
        rejectedFiles.forEach((file) => {
          file.errors.forEach(() => {
            toast({
              content: `${file.file.name}: ${file.errors[0].message}`,
              type: 'error',
            })
          })
        })
      }

      if (acceptedFiles.length === 0) {
        return
      }

      setAcceptedFiles(acceptedFiles)
    },
    []
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  })

  return (
    <div className="flex h-full max-h-[200px] flex-col gap-4">
      <div
        {...getRootProps()}
        className="flex h-full w-full flex-col items-center justify-center rounded-lg border-3 border-dashed border-stone-800 bg-stone-900/50 p-4"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-stone-400">Drop the files here ...</p>
        ) : (
          <p className="text-stone-400">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  )
}
