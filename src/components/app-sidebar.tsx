import { SiGithub } from '@icons-pack/react-simple-icons'
import { HomeIcon, ImageIcon, MusicIcon, VideoIcon } from 'lucide-react'
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

type SidebarCategoryItem =
  | {
      title: string
      icon?: ReactNode
      external?: false
      url: keyof Register['pages']
    }
  | {
      title: string
      icon?: ReactNode
      external: true
      href: string
    }
type SidebarCategory = {
  title: string
  icon?: ReactNode
  items: SidebarCategoryItem[]
}

// Menu items.
const items: SidebarCategory[] = [
  {
    title: 'Drag ‘n’ Convert',
    items: [
      { title: 'Home', icon: <HomeIcon />, url: '/' },
    ],
  },
  {
    title: 'Images',
    icon: <ImageIcon />,
    items: [
      { title: 'Convert to PNG', url: '/to-png' },
      { title: 'Convert to JPG', url: '/to-jpg' },
      { title: 'Convert to WebP', url: '/to-webp' },
    ],
  },
  {
    title: 'Video',
    icon: <VideoIcon />,
    items: [
      { title: 'Convert to MP4', url: '/to-mp4' },
      { title: 'Convert to MKV', url: '/to-mkv' },
      { title: 'Convert to FLV', url: '/to-flv' },
      { title: 'Convert to AVI', url: '/to-avi' },
      { title: 'Convert to MOV', url: '/to-mov' },
      { title: 'Convert to WebM', url: '/to-webm' },
      { title: 'Convert to OGV', url: '/to-ogv' },
    ],
  },
  {
    title: 'Audio',
    icon: <MusicIcon />,
    items: [
      { title: 'Convert to M4A', url: '/to-m4a' },
      { title: 'Convert to MP3', url: '/to-mp3' },
      { title: 'Convert to OGG', url: '/to-ogg' },
      { title: 'Convert to WAV', url: '/to-wav' },
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
            <SidebarGroupLabel className="flex flex-row gap-1">
              {category.icon ?? null}
              {category.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        onClick={handleLinkClick}
                        to={item.external ? item.href : item.url}
                      >
                        {item.icon ?? null}
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
