import { useCallback, useState } from 'react'
import type { ConvertedFile } from '~/types/converter'
import { useDownload } from './use-download'

type UseConvertProps = {
  onDone?: () => void
  convertionFunction: (file: File) => Promise<ConvertedFile>
}

export function useConvert({ convertionFunction, onDone }: UseConvertProps) {
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
          setLoading(false)
          onDone?.()
        })
    },
    [onDone, convertionFunction, download]
  )

  return {
    convert,
    isLoading,
  }
}
