import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { FileRoutesByTo } from '@/routeTree.gen'
import { Link } from '@tanstack/react-router'

type LinkItems = {
  [category: string]: {
    title: string
    url: keyof FileRoutesByTo
  }[]
}
// Menu items.
const items: LinkItems = {
  main: [
    {
      title: 'Home',
      url: '/',
    },
  ],
  converters: [
    {
      title: 'JPG to PNG',
      url: '/jpg-to-png',
    },
    {
      title: 'PNG to SVG',
      url: '/png-to-jpg',
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Drag ‘n’ Convert</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Converters</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.converters.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
