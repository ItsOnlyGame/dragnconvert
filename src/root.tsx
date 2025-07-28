import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
} from 'react-router'
import { useTheme } from 'react-router-theme'
export { action, loader } from 'react-router-theme'

import type { Route } from './+types/root'
import './app.css'

import { Toaster } from 'sonner'
import { ThemeContext } from './components/theme-context'
import { SidebarProvider } from './components/ui/sidebar'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

const defaultTheme = 'dark'

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useLoaderData() as { theme: string }
  const fetcher = useFetcher()

  const [theme, setTheme] = useTheme(loaderData, fetcher, defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" className={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeContext.Provider>
  )
}

export default function App() {
  return (
    <SidebarProvider>
      <Outlet />
      <Toaster />
    </SidebarProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
