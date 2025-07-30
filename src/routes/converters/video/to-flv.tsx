import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'flv', 'video'),
  })

  return (
    <>
      <PageMeta
        title="Convert to FLV"
        description="Convert video to FLV format."
      />

      <h2 className="text-bold text-2xl">Convert to FLV</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/webm': ['.webm'],
          'video/mov': ['.mov'],
          'video/avi': ['.avi'],
          'video/mkv': ['.mkv'],
          'video/mp4': ['.mp4'],
          'video/ogv': ['.ogv'],
        }}
      />
    </>
  )
}
