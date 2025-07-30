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

type SidebarCategory = {
  title: string
  items: { title: string; url: keyof Register['pages'] }[]
}
// Menu items.
const items: SidebarCategory[] = [
  {
    title: 'Drag ‘n’ Convert',
    items: [{ title: 'Home', url: '/' }],
  },
  {
    title: 'Images',
    items: [
      { title: 'Convert to PNG', url: '/to-png' },
      { title: 'Convert to JPG', url: '/to-jpg' },
      { title: 'Convert to WebP', url: '/to-webp' },
    ],
  },
  {
    title: 'Video',
    items: [
      { title: 'Convert to MP4', url: '/to-mp4' },
      { title: 'Convert to MKV', url: '/to-mkv' },
      { title: 'Convert to FLV', url: '/to-flv' },
      { title: 'Convert to AVI', url: '/to-avi' },
      { title: 'Convert to MOV', url: '/to-mov' },
      { title: 'Convert to WebM', url: '/to-webm' },
    ],
  },
  {
    title: 'Audio',
    items: [
      { title: 'Convert to M4A', url: '/to-m4a' },
      { title: 'Convert to MP3', url: '/to-mp3' },
    ],
  },
]

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
        {items.map((category) => (
          <SidebarGroup key={category.title}>
            <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
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
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
