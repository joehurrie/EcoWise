
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
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutGrid,
  ScanLine,
  BarChart2,
  Users,
  Menu,
  Package,
  Briefcase,
} from 'lucide-react';
import { EcoWiseLogo } from './icons';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { useEffect } from 'react';

const navItems = [
  { href: '/products', label: 'Products', icon: Package },
  { href: '/scan', label: 'Scan Product', icon: ScanLine },
  { href: '/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/partner', label: 'For Partners', icon: Briefcase },
];

function MobileSidebarCloser() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  return null;
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  if (isHomePage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-2">
            <EcoWiseLogo className="w-8 h-8 text-primary" />
            <span className="font-headline text-2xl font-bold from-primary to-emerald-600">
              EcoScan
            </span>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <Separator className="mb-4" />
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://randomuser.me/api/portraits/women/43.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-semibold">Joharie</p>
              <p className="text-xs text-muted-foreground">joharie@example.com</p>
            </div>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <EcoWiseLogo className="w-6 h-6 text-primary" />
            <span className="font-headline text-xl">EcoScan</span>
          </Link>
          <SidebarTrigger />
        </header>
        <div className="p-8">{children}</div>
      </SidebarInset>
      <MobileSidebarCloser />
    </SidebarProvider>
  );
}
