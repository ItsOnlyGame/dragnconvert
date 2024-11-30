import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import indexStyle from "../index.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: 'Drag ‘n’ Convert',
      },
    ],
    links: [{ rel: "stylesheet", href: indexStyle }],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className="dark">
      <head>
        <Meta />
      </head>
      <body className="flex flex-col w-full h-screen">
        <SidebarProvider>
          {children}
          <ScrollRestoration />
          <Scripts />
        </SidebarProvider>
      </body>
    </html>
  );
}
