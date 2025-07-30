import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'ogg', 'audio'),
  })

  return (
    <>
      <PageMeta
        title="Convert to OGG"
        description="Convert audio and video to OGG format."
      />

      <h2 className="text-bold text-2xl">Convert to OGG</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/mp4': ['.mp4'],
          'video/mkv': ['.mkv'],
          'video/webm': ['.webm'],
          'video/mov': ['.mov'],
          'video/avi': ['.avi'],
          'video/flv': ['.flv'],
          'video/ogv': ['.ogv'],

          'audio/mp3': ['.mp3'],
          'audio/m4a': ['.m4a'],
          'audio/wav': ['.wav'],
        }}
      />
    </>
  )
}
