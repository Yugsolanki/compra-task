import { Home, Settings, User, HelpCircle, ChevronsUpDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import "@/styles/CustomSidebar.css";

export function CustomSidebar() {
  return (
    <SidebarProvider className="w-[250px]">
      <div className="relative">
        <Sidebar className="sidebar m-3 rounded-3xl bg-background">
          <SidebarHeader className="justify-start m-0 px-0 pt-5">
            <a href="#">
              <img src="/logo-name.svg" alt="" />
            </a>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Centre
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="sidebar-button !py-6">
                  <img
                    src="https://avatars.githubusercontent.com/u/29647600?v=4"
                    alt="Profile"
                    className="h-8 w-8 rounded-full mr-2 ml-0"
                  />
                  Profile
                  <ChevronsUpDown className="ml-auto h-4 w-4 mr-2" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
