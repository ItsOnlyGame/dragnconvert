import { Loader2Icon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { Button } from '../ui/button'
import { FileDropzone } from './file-dropzone'
import { FileList } from './file-list'

type FileConvertProps = PropsWithChildren & {
  handleConvert: (files: File[]) => Promise<void>
  isLoading?: boolean
}
export function FileConvert({
  children,
  handleConvert,
  isLoading,
}: FileConvertProps) {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([])

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex h-full w-full flex-col gap-4">
        <FileDropzone
          setAcceptedFiles={setAcceptedFiles}
          accept={{
            'image/jpg': ['.jpg', '.jpeg'],
          }}
        />
        {children}
        <Button
          onClick={() => handleConvert(acceptedFiles)}
          disabled={isLoading || acceptedFiles.length === 0}
        >
          {isLoading ? <Loader2Icon className="animate-spin" /> : 'Convert'}
        </Button>
      </div>
      <FileList files={acceptedFiles} setAcceptedFiles={setAcceptedFiles} />
    </div>
  )
}
