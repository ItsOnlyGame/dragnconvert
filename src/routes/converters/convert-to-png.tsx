import { FileConvert } from '~/components/convertion/file-convert'
import { toPNG } from '~/converters/to-png'
import { useConvert } from '~/hooks/use-convert'

export default function RouteComponent() {
  const { convert, isLoading } = useConvert({
    convertionFunction: (file) => toPNG(file),
  })

  return (
    <>
      <h2 className="text-bold text-2xl">Convert to PNG</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'image/jpg': ['.jpg', '.jpeg'],
          'image/jpeg': ['.jpg', '.jpeg'],
          'image/webp': ['.webp'],
        }}
      />
    </>
  )
}
