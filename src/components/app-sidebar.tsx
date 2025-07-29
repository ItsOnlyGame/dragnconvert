import { Link, type Register } from 'react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar'

type LinkItems = {
  [category: string]: {
    title: string
    url: keyof Register['pages']
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
      title: 'Convert to PNG',
      url: '/to-png',
    },
    {
      title: 'Convert to JPG',
      url: '/to-jpg',
    },
    {
      title: 'Convert to WebP',
      url: '/to-webp',
    },
    {
      title: 'Convert to MP4',
      url: '/to-mp4',
    },
    {
      title: 'Convert to MP3',
      url: '/to-mp3',
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
