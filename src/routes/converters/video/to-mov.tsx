import { FileConvert } from '~/components/convertion/file-convert'
import { PageMeta } from '~/components/page-meta'
import { useConvert } from '~/hooks/use-convert'
import { useFFmpeg } from '~/hooks/use-ffmpeg'

export default function RouteComponent() {
  const ffmpeg = useFFmpeg()

  const { convert, isLoading } = useConvert({
    convertionFunction: async (file) =>
      await ffmpeg.convert(file, 'mov', 'video'),
  })

  return (
    <>
      <PageMeta
        title="Convert to MOV"
        description="Convert video to MOV format."
      />

      <h2 className="text-bold text-2xl">Convert to MOV</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'video/webm': ['.webm'],
          'video/avi': ['.avi'],
          'video/flv': ['.flv'],
          'video/mkv': ['.mkv'],
          'video/mp4': ['.mp4'],
          'video/ogv': ['.ogv'],
        }}
      />
    </>
  )
}
