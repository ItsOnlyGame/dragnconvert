import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'm4a', 'audio'),
  })

  return (
    <>
      <PageMeta
        title="Convert to M4A"
        description="Convert audio and video to M4A format."
      />

      <h2 className="text-bold text-2xl">Convert to M4A</h2>
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

          'audio/mp3': ['.mp3'],
          'audio/ogg': ['.ogg'],
          'audio/ogv': ['.ogv'],
          'audio/wav': ['.wav'],
        }}
      />
    </>
  )
}
