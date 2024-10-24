import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import Link from "next/link";

// TODO: Switch from NextUI to Shadcn

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem >
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                    <Image src="/SavePoint.png" alt="SavePoint Logo" width={150} height={150}/>
                  </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink href="/games" className={navigationMenuTriggerStyle()}>
                  <span >Games</span>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <NavigationMenuLink href="/notes" className={navigationMenuTriggerStyle()}>
                  <span >Notes</span>
                </NavigationMenuLink>
            </NavigationMenuItem>
</NavigationMenuList>
        </NavigationMenu>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
