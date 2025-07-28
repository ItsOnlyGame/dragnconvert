import { Outlet } from 'react-router'
import { AppSidebar } from '~/components/app-sidebar'

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-row">
      <AppSidebar />
      <div className="flex h-full w-full justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
