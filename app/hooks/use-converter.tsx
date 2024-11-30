export interface ConvertedFile {
  blob: Blob
  filename: string
}

const convertToPng = async (file: File): Promise<ConvertedFile> => {
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
        if (blob)
          resolve({
            blob: blob,
            filename: `${filename}.png`,
          })
      }, 'image/png')
    }
  })
}

// function convertToPng(inputFile: File) {
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')

//   const filename = inputFile.name.split('.').slice(0, -1).join('.')

//   if (!ctx) {
//     console.error('Could not create a canvas')
//     return
//   }

//   const img = new Image()

//   img.onload = () => {
//     canvas.width = img.width
//     canvas.height = img.height
//     ctx.drawImage(img, 0, 0)
//     const pngDataUrl = canvas.toDataURL('image/png')

//     const link = document.createElement('a')
//     link.href = pngDataUrl
//     link.download = `${filename}.png`
//     link.click()
//   }

//   img.src = URL.createObjectURL(inputFile)
// }

export function useConverter() {
  return {
    convertToPng,
  }
}
