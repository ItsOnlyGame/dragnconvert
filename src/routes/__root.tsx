import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { SidebarProvider } from '@/components/ui/sidebar'
import '../index.css'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
})

const isDevelopment = process.env.NODE_ENV === 'development'

function RootComponent() {
  return (
    <div className="flex h-screen w-full flex-col">
      <SidebarProvider>
        <Outlet />
      </SidebarProvider>
      {isDevelopment && <TanStackRouterDevtools position="bottom-right" />}
    </div>
  )
}
