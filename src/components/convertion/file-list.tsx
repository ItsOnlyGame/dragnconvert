import {
  FileQuestionMarkIcon,
  ImageIcon,
  MusicIcon,
  Trash2Icon,
  VideoIcon,
  XIcon,
} from 'lucide-react'
import { useCallback, useMemo, type Dispatch, type SetStateAction } from 'react'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type FileListProps = {
  files: File[]
  setAcceptedFiles: Dispatch<SetStateAction<File[]>>
}
export function FileList({ files, setAcceptedFiles }: FileListProps) {
  const handleRemove = useCallback(
    (fileToRemove: File) => {
      setAcceptedFiles((prev) =>
        prev.filter((f) => f.name !== fileToRemove.name)
      )
    },
    [setAcceptedFiles]
  )

  const handleRemoveAll = useCallback(() => {
    setAcceptedFiles([])
  }, [setAcceptedFiles])

  return (
    <div className="relative flex max-w-md flex-col items-start rounded-xl border pb-6">
      <ScrollArea className="mb-2 h-[200px] w-full p-4">
        <ul className="flex w-full flex-col gap-2">
          {files.map((file) => (
            <ListItem key={file.name} file={file} onRemove={handleRemove} />
          ))}
        </ul>
      </ScrollArea>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 bottom-2"
            onClick={handleRemoveAll}
          >
            <Trash2Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove all files from list</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

type ListItemProps = {
  file: File
  onRemove: (file: File) => void
}

function ListItem({ file, onRemove }: ListItemProps) {
  return (
    <li className="grid max-w-sm grid-cols-[28px_auto_28px] items-center gap-2 rounded-lg bg-stone-900 p-1 px-3 text-stone-300">
      <ItemIcon file={file} />
      <p className="overflow-x-hidden text-start overflow-ellipsis">
        {file.name}
      </p>
      <Button size="icon" variant="ghost" onClick={() => onRemove(file)}>
        <XIcon />
      </Button>
    </li>
  )
}

type ItemIconProps = {
  file: File
}
function ItemIcon({ file }: ItemIconProps) {
  const Icon = useMemo(() => {
    const ext = file.type.split('/')[0]
    switch (ext) {
      case 'image':
        return ImageIcon
      case 'video':
        return VideoIcon
      case 'audio':
        return MusicIcon
      default:
        return FileQuestionMarkIcon
    }
  }, [file])

  return <Icon />
}
