import { AppSidebar } from '@/components/app-sidebar'
import { PropsWithChildren } from 'react'

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
