import { DefaultLayout } from '@/layouts/default-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <DefaultLayout>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">Welcome to convertion land!</h2>

          <p className="font-semibold">
            Here you can convert your files from one format to another.
          </p>
        </div>

        <p>
          Get started by selecting on the left, what what kind of convertion you
          want to do
        </p>
      </div>
    </DefaultLayout>
  )
}
