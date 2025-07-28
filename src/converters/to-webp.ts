import type { ConvertedFile } from '~/types/converter'

/**
 * Convert a file to WebP
 *
 * @param file File from an <input />
 * @param quality A number between 0.1 and 1.0
 * @returns A promise that resolves to a ConvertedFile
 */
export async function toWebP(
  file: File,
  quality: number
): Promise<ConvertedFile> {
  const img = new Image()
  img.src = URL.createObjectURL(file)

  return new Promise((resolve) => {
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0)

      const filename = file.name.split('.').slice(0, -1).join('.')

      // Convert to WebP
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({
              blob: blob,
              filename: `${filename}.webp`,
            })
          }
        },
        'image/webp',
        quality
      ) // Quality (0.1–1.0)
    }
  })
}
