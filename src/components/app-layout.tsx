'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  LayoutGrid,
  ScanLine,
  BarChart2,
  Users,
  Menu,
  Package,
} from 'lucide-react';
import { Logo } from './icons';
import { Button } from './ui/button';
import type { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

const navItems = [
  { href: '/', label: 'Home', icon: LayoutGrid },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/scan', label: 'Scan Product', icon: ScanLine },
  { href: '/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/community', label: 'Community', icon: Users },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold font-headline text-foreground">
              EcoScan
            </h1>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/')}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-2">
          <Separator className="my-2" />
          <Link
            href="/login"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://picsum.photos/100"
                alt="User"
                data-ai-hint="profile avatar"
                width={36}
                height={36}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-sidebar-foreground">
                Guest User
              </span>
              <span className="text-xs text-sidebar-foreground/70">
                View Profile
              </span>
            </div>
          </Link>
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-col flex-1 w-full min-w-0">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:hidden">
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </SidebarTrigger>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-primary" />
            <h1 className="text-lg font-bold font-headline text-foreground">
              EcoScan
            </h1>
          </Link>
        </header>

        <SidebarInset className="p-4 sm:p-6 lg:p-8">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
