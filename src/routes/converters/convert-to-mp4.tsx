import { FileConvert } from '~/components/convertion/file-convert'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'mp4', 'video'),
  })

  return (
    <>
      <h2 className="text-bold text-2xl">Convert to MP4</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/mkv': ['.mkv'],
          'video/webm': ['.webm'],
          'video/mov': ['.mov'],
          'video/avi': ['.avi'],
          'video/flv': ['.flv'],
        }}
      />
    </>
  )
}
