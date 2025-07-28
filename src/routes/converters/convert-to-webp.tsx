import { useState } from 'react'
import { FileConvert } from '~/components/convertion/file-convert'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { toWebP } from '~/converters/to-webp'
import { useConvert } from '~/hooks/use-convert'

export default function RouteComponent() {
  const [quality, setQuality] = useState<number>(0.9)

  const { convert, isLoading } = useConvert({
    convertionFunction: (file) => toWebP(file, quality),
  })

  return (
    <>
      <h2 className="text-bold text-2xl">Convert to WebP</h2>
      <FileConvert
        handleConvert={convert}
        isLoading={isLoading}
        accept={{
          'image/png': ['.png'],
          'image/jpg': ['.jpg', '.jpeg'],
          'image/jpeg': ['.jpg', '.jpeg'],
        }}
      >
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="webp-quality">WebP Quality</Label>
          <Input
            id="webp-quality"
            type="number"
            step={0.1}
            min={0.1}
            max={1}
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            placeholder="Quality (0.1 - 1)"
          />
        </div>
      </FileConvert>
    </>
  )
}
