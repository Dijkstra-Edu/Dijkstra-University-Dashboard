"use client";

import * as React from "react";
import {
  IconCamera,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconSearch,
  IconSettings,
  IconBriefcase,
  IconFileText,
  IconHome,
  IconLayoutDashboard,
  IconSchool,
  IconTrophy,
  IconUsersGroup,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import Link from "next/link";

const data = {
  user: {
    name: "Jonathan Rufus Samuel",
    email: "jonathan.rufus.samuel@cern.ch",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: IconHome, // classic home icon
    },
    {
      title: "Dijkstra Talent Pool",
      url: "/dijkstra-talent-pool",
      icon: IconUsersGroup, // group of people, good for talent pool
    },
    {
      title: "University Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboard, // clean dashboard icon
    },
    {
      title: "Contract Details",
      url: "/contract-details",
      icon: IconFileText, // document-style icon for contracts
    },
    {
      title: "Search Dijkstra Teams",
      url: "/teams",
      icon: IconSearch, // magnifying glass, good for "search"
    },
    {
      title: "Scout Students",
      url: "/scout-students",
      icon: IconSchool, // academic/student feel
    },
    {
      title: "Create a Competition",
      url: "/create-competition",
      icon: IconTrophy, // trophy icon is perfect for competitions
    },
    {
      title: "Post an Opportunity",
      url: "/post-opportunity",
      icon: IconBriefcase, // jobs/opportunities = briefcase
    },
  ],

  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/administration/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/administration/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/administration/search",
      icon: IconSearch,
    },
  ],
  // documents: [
  //   {
  //     name: "Projects Hub",
  //     url: "/opportunities/projects",
  //     icon: IconDatabase,
  //   },
  //   {
  //     name: "Fellowships and Programs",
  //     url: "/opportunities/fellowships",
  //     icon: IconReport,
  //   },
  //   {
  //     name: "Job Board",
  //     url: "/opportunities/jobs",
  //     icon: IconFileWord,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    data.user.name = session.user.name || "No name";
    data.user.email = session.user.email || "No email";
    data.user.avatar = session.user.avatar_url || session.user.image || ""; // your extended avatar_url or fallback
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          {/* <SidebarMenuItem>
            <Link href="/" className="flex items-center gap-2">
              <img src="/icon.png" alt="Logo" className="h-12 w-auto" />
              <span className="text-base font-semibold">Dijkstra</span>
            </Link>
          </SidebarMenuItem> */}
          <SidebarMenuItem>
            <Link href="/" className="flex items-center gap-2">
              <img src="/icon.png" alt="Logo" className="h-12 w-auto" />

              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold">Dijkstra</span>
                <span className="text-xs text-gray-400">
                  For Universities
                </span>
              </div>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
