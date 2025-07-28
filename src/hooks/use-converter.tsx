export interface ConvertedFile {
  blob: Blob
  filename: string
}

/**
 * Convert a file to PNG
 *
 * @param file File from an <input />
 * @returns A promise that resolves to a ConvertedFile
 */
const convertToPNG = async (file: File): Promise<ConvertedFile> => {
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

      canvas.toBlob((blob) => {
        if (blob) {
          resolve({
            blob: blob,
            filename: `${filename}.png`,
          })
        }
      }, 'image/png')
    }
  })
}

/**
 * Convert a file to JPEG
 *
 * @param file File from an <input />
 * @param quality A number between 0.1 and 1.0
 * @returns A promise that resolves to a ConvertedFile
 */
const convertToJPG = async (
  file: File,
  quality: number
): Promise<ConvertedFile> => {
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

      // Convert to JPEG
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({
              blob: blob,
              filename: `${filename}.jpg`,
            })
          }
        },
        'image/jpeg',
        quality
      ) // Quality (0.1–1.0)
    }
  })
}

export function useConverter() {
  return {
    convertToPNG,
    convertToJPG,
  }
}
