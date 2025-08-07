import { Outlet } from 'react-router'
import { AppSidebar } from '~/components/app-sidebar'
import { SidebarTrigger } from '~/components/ui/sidebar'
import { useIsMobile } from '~/hooks/use-mobile'

export default function Layout() {
  const isMobile = useIsMobile()

  return (
    <div className="flex h-screen w-full flex-row">
      <AppSidebar />
      {isMobile && (
        <div className="absolute top-0 left-0 block p-2">
          <SidebarTrigger />
        </div>
      )}
      <div className="flex h-full w-full justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
