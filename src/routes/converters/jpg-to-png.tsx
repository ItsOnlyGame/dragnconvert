import { useCallback } from 'react'
import { FileConvert } from '~/components/convertion/file-convert'
import { toPNG } from '~/converters/to-png'
import { useDownload } from '~/hooks/use-download'

export default function RouteComponent() {
  const { download } = useDownload()

  const handleConvert = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      return
    }

    const convertedFiles = await Promise.all(
      acceptedFiles.map((file) => toPNG(file))
    )

    download(convertedFiles)
  }, [])

  return (
    <>
      <h2 className="text-bold text-2xl">JPG to PNG converter</h2>
      <FileConvert handleConvert={handleConvert} />
    </>
  )
}
