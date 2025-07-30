import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { useRef, useState } from 'react'

export type UseFFmpegReturn = {
  load: () => Promise<void>
  convert: (
    inputFile: File,
    outputFormat: string,
    type: 'video' | 'audio'
  ) => Promise<{ blob: Blob; filename: string }>
  isLoaded: boolean
}

export function useFFmpeg() {
  const [isLoaded, setLoaded] = useState(false)
  const ffmpegRef = useRef<FFmpeg>(new FFmpeg())

  const load = async () => {
    if (isLoaded) return
    console.log('Loading FFmpeg (0.12.10)')

    const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.10/dist/esm'
    const ffmpeg = ffmpegRef.current
    ffmpeg.on('log', ({ message, type }) => {
      console.log(type, message)
    })

    ffmpeg.on('progress', ({ progress, time }) => {
      console.log(`${progress * 100} % (transcoded time: ${time / 1000000} s)`)
    })

    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm'
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        'text/javascript'
      ),
    })
    setLoaded(true)
  }

  const convert = async (
    inputFile: File,
    outputFormat: string,
    type: 'video' | 'audio'
  ) => {
    if (!isLoaded) {
      await load()
    }

    const ffmpeg = ffmpegRef.current

    const outputFile = inputFile.name.split('.').slice(0, -1).join('.')

    await ffmpeg.writeFile(inputFile.name, await fetchFile(inputFile))
    if (type == 'video') {
      await ffmpeg.exec(['-i', inputFile.name, '-c', 'copy', outputFile])
    } else if (type == 'audio') {
      await ffmpeg.exec(['-i', inputFile.name, '-vn', outputFile])
    }
    const data = await ffmpeg.readFile(outputFile)

    return {
      blob: new Blob([data as Buffer]),
      filename: outputFile,
    }
  }

  return { load, convert, isLoaded } as UseFFmpegReturn
}
