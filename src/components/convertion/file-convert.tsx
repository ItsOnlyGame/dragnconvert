import { Loader2Icon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import type { Accept } from 'react-dropzone'
import { useMediaQuery } from '~/hooks/use-media-query'
import { Button } from '../ui/button'
import { FileDropzone } from './file-dropzone'
import { FileList } from './file-list'

type FileConvertProps = PropsWithChildren & {
  handleConvert: (files: File[]) => Promise<void>
  isLoading?: boolean
  accept: Accept
}
export function FileConvert({
  children,
  handleConvert,
  isLoading,
  accept,
}: FileConvertProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([])

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        <FileDropzone setAcceptedFiles={setAcceptedFiles} accept={accept} />
        {children}

        <FileList files={acceptedFiles} setAcceptedFiles={setAcceptedFiles} />
        <Button
          onClick={() => handleConvert(acceptedFiles)}
          disabled={isLoading || acceptedFiles.length === 0}
        >
          {isLoading ? <Loader2Icon className="animate-spin" /> : 'Convert'}
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex h-full w-full flex-col gap-4">
        <FileDropzone setAcceptedFiles={setAcceptedFiles} accept={accept} />
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
