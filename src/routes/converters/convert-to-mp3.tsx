import { FileConvert } from '~/components/convertion/file-convert'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'mp3', 'audio'),
  })

  return (
    <>
      <h2 className="text-bold text-2xl">Convert to MP3</h2>
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
          'audio/m4a': ['.m4a'],
          'audio/ogg': ['.ogg'],
          'audio/ogv': ['.ogv'],
          'audio/wav': ['.wav'],
        }}
      />
    </>
  )
}
