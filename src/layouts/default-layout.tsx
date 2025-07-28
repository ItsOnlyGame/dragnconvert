import type { PropsWithChildren } from 'react'
import { AppSidebar } from '~/components/app-sidebar'

interface Props extends PropsWithChildren {
  className?: string
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full flex-row">
      <AppSidebar />
      {children}
    </div>
  )
}
