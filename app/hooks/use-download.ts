import { ConvertedFile } from './use-converter'
import FileSaver from 'file-saver'
import JSZip from 'jszip'

async function download(
  converter: (file: File) => Promise<ConvertedFile>,
  fileList: FileList | undefined
) {
  if (!fileList || fileList.length == 0) {
    return
  }

  const filesArray = Array.from(fileList)
  const convertedFiles = await Promise.all(filesArray.map(converter))

  if (convertedFiles.length == 1) {
    FileSaver.saveAs(convertedFiles[0].blob, convertedFiles[0].filename)
    return
  } else {
    var zip = new JSZip()

    for (const file of convertedFiles) {
      zip.file(file.filename, file.blob)
    }

    zip.generateAsync({ type: 'blob' }).then(function (content) {
      FileSaver.saveAs(content, 'images.zip')
    })
  }
}

export function useDownload() {
  return {
    download,
  }
}
