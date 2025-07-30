import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'mkv', 'video'),
  })

  return (
    <>
      <PageMeta
        title="Convert to MKV"
        description="Convert video to MKV format."
      />

      <h2 className="text-bold text-2xl">Convert to MKV</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/webm': ['.webm'],
          'video/mov': ['.mov'],
          'video/avi': ['.avi'],
          'video/flv': ['.flv'],
          'video/mp4': ['.mp4'],
        }}
      />
    </>
  )
}
