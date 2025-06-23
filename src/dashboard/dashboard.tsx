import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";


import { AppSidebar } from "./appsidebar";


export default function Dashboard() {
  return (
    <div>
      <SidebarProvider   >
      <SidebarTrigger  className="mt-4"/>
        <AppSidebar  />
      
       
        <Outlet />
      </SidebarProvider>
    </div>
  );
}
