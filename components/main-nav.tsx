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
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import UserAvatar from "@/components/UserAvatar";

export default function MainNav() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            <Image
              src="/SavePoint.png"
              alt="SavePoint Logo"
              width={150}
              height={150}
            />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/games"
            className={navigationMenuTriggerStyle()}
          >
            <span>Games</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/notes"
            className={navigationMenuTriggerStyle()}
          >
            <span>Notes</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="float-end">
        <UserAvatar />
      </div>
    </NavigationMenu>
  );
}
