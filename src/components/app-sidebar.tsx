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
  useSidebar,
} from '~/components/ui/sidebar'
import { useMediaQuery } from '~/hooks/use-media-query'

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
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { toggleSidebar } = useSidebar()

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar()
    }
  }

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
                    <Link onClick={handleLinkClick} to={item.url}>
                      {item.title}
                    </Link>
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
                    <Link onClick={handleLinkClick} to={item.url}>
                      {item.title}
                    </Link>
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
