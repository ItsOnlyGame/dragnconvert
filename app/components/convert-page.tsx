import { Layout } from '@/layouts/layout'
import { LabelButton } from './ui/label-button'

interface Props {
  title: string
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileTypes: string
}

export const ConvertPage = ({ title, handleUpload, fileTypes }: Props) => {
  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full justify-center gap-2">
        <h2 className="text-2xl text-bold">{title}</h2>
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
    </Layout>
  )
}
