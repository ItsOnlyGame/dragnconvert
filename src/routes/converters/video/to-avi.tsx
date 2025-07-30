import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'avi', 'video'),
  })

  return (
    <>
      <PageMeta
        title="Convert to AVI"
        description="Convert video to AVI format."
      />

      <h2 className="text-bold text-2xl">Convert to AVI</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/webm': ['.webm'],
          'video/mov': ['.mov'],
          'video/flv': ['.flv'],
          'video/mkv': ['.mkv'],
          'video/mp4': ['.mp4'],
        }}
      />
    </>
  )
}
