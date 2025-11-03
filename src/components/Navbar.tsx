"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl  mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
        <Link href='/' >
          <MenuItem setActive={setActive} active={active} item="Home" >
          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Masterclasses" >
          <div className="flex flex-col space-y-4 text-sm" >
            <HoveredLink href='/courses' >All Masterclasses</HoveredLink>
            <HoveredLink href='/courses' >YouTube Fast-Track</HoveredLink>
            <HoveredLink href='/courses' >The Art of Storytelling</HoveredLink>
            <HoveredLink href='/courses' >Brand Building</HoveredLink>
            <HoveredLink href='/courses' >Advanced Video Editing</HoveredLink>
          </div>
        </MenuItem>

        <Link href='/contact-us' >
          <MenuItem setActive={setActive} active={active} item="Contact Us" >
          </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}

export default navbar