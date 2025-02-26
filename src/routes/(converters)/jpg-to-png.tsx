import { ConvertPage } from '@/components/convert-page'
import { useConverter } from '@/hooks/use-converter'
import { useDownload } from '@/hooks/use-download'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(converters)/jpg-to-png')({
  component: RouteComponent,
})

function RouteComponent() {
  const { download } = useDownload()
  const { convertToPNG } = useConverter()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length == 0) {
      return
    }

    const filesArray = Array.from(e.target.files)
    const convertedFiles = await Promise.all(
      filesArray.map((file) => convertToPNG(file))
    )

    download(convertedFiles)
  }

  return (
    <ConvertPage
      title="JPG to PNG converter"
      handleUpload={handleUpload}
      fileTypes=".jpg,.jpeg"
    />
  )
}
