import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Grid2x2,
  HousePlus,
  Unplug,
  BatteryFull,
  AlarmClock,
  Shield,
  Settings,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import photo from "../assets/images/Frame.svg";
import frame from "../assets/images/photo.svg";

import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";

const nav = [
  {
    title: "Dashboard",
    url: "#",
    icon: Grid2x2,
  },
  {
    title: "Rooms",
    url: "#",
    icon: HousePlus,
  },
  {
    title: "Devices",
    url: "#",
    icon: Unplug,
  },
  {
    title: "Energy Usage",
    url: "#",
    icon: BatteryFull,
  },
  {
    title: "Automation",
    url: "#",
    icon: AlarmClock,
  },
  {
    title: "Security",
    url: "#",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help Center",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Contact Support",
    url: "#",
    icon: Phone,
  },
];

export function AppSidebar() {
  return (
    <>
      <Sidebar className="font-sans  mr-0 pr-0 h-full font-medium text-[spacing/3-5] leading-none tracking-normal text-center align-middle">
        <ScrollArea className="w-full h-full rounded-md  border ">
          <div>
            <SidebarHeader className="flex flex-row justify-between">
              <Avatar className="w-[83px] ml-3 mt-3 h-[18px] ">
                <AvatarImage src={photo} />
              </Avatar>
              <SidebarTrigger className="justify-end items-end" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup />
              <SidebarGroupContent>
                <SidebarMenu className="pl-3">
                  {nav.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroup />
            </SidebarContent>
            <SidebarFooter className="align-bottom">
              <Card className="gap-2 mt-35 text-start font-sans  font-medium text-[spacing/3-2] leading-none tracking-normal  align-middle border-none shadow-none">
                <CardHeader className="pl-3 pr-0">
                  Need help setting things up?
                </CardHeader>
                <CardDescription className="pl-3 pt-0 font-normal text-slate-500">
                  Our service robots are ready to help you right now.
                </CardDescription>
                <Button
                  variant={"outline"}
                  size={"default"}
                  className="w-fit ml-3 bg-white text-orange-500 font-medium justify-start "
                >
                  Call us
                </Button>
              </Card>
              <Avatar className="w-fit h-[256px] rounded-none">
                <AvatarImage src={frame} />
              </Avatar>
            </SidebarFooter>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </Sidebar>
    </>
  );
}
