import { LabelButton } from '~/components/ui/label-button'
import { DefaultLayout } from '~/layouts/default-layout'

interface Props {
  title: string
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileTypes: string
}

export const ConvertPage = ({ title, handleUpload, fileTypes }: Props) => {
  return (
    <DefaultLayout>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <h2 className="text-bold text-2xl">{title}</h2>
        <div>
          <input
            id="file_upload"
            className="hidden"
            type="file"
            onChange={handleUpload}
            accept={fileTypes}
            multiple
          />
          <LabelButton htmlFor="file_upload">Upload file</LabelButton>
        </div>
      </div>
    </DefaultLayout>
  )
}
