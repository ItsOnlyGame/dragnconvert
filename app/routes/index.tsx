import { ConvertPage } from '@/components/convert-page'
import { useConverter } from '@/hooks/use-converter'
import { useDownload } from '@/hooks/use-download'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { download } = useDownload()
  const { convertToPng } = useConverter()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length == 0) {
      return
    }

    download(convertToPng, e.target.files)
  }

  return (
    <ConvertPage
      title="JPG to PNG converter"
      handleUpload={handleUpload}
      fileTypes=".jpg,.jpeg"
    />
  )
}
