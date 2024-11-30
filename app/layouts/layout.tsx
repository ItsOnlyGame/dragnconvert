import { AppSidebar } from '@/components/app-sidebar'

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-row w-full h-full">
      <AppSidebar />
      {children}
    </div>
  )
}
