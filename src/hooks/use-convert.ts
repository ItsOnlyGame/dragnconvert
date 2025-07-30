import { useCallback, useState } from 'react'
import { toast } from '~/components/ui/sonner'
import type { ConvertedFile } from '~/types/converter'
import { useDownload } from './use-download'

type UseConvertProps = {
  onDone?: () => void
  onError?: (error: unknown) => void
  convertionFunction: (file: File) => Promise<ConvertedFile>
}

const defaultOnError = (error: unknown) => {
  console.error(error)
  if (error instanceof Error) {
    toast({
      content: 'Conversion error: ' + error.message,
      type: 'error',
    })
    return
  }

  toast({
    content: 'Unknown conversion error',
    type: 'error',
  })
}

export function useConvert({
  convertionFunction,
  onDone,
  onError = defaultOnError,
}: UseConvertProps) {
  const [isLoading, setLoading] = useState<boolean>(false)
  const { download } = useDownload()

  const convert = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        return
      }
      setLoading(true)

      Promise.all(acceptedFiles.map(convertionFunction))
        .then((convertedFiles) => {
          download(convertedFiles)
        })
        .then(() => {
          onDone?.()
        })
        .catch((error) => {
          onError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [onDone, onError, convertionFunction, download]
  )

  return {
    convert,
    isLoading,
  }
}
