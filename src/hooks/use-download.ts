import FileSaver from 'file-saver'
import JSZip from 'jszip'
import type { ConvertedFile } from '~/types/converter'

async function download(files: ConvertedFile[] | undefined) {
  if (!files || files.length == 0) {
    return
  }

  if (files.length == 1) {
    FileSaver.saveAs(files[0].blob, files[0].filename)
    return
  } else {
    const zip = new JSZip()

    for (const file of files) {
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
