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






export function useConverter() {
  return {
    convertToPNG,
  }
}
