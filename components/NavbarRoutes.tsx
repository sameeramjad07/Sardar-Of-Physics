"use client"

import { useAuth } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "./search-input"
import { useState, useEffect } from "react"

const NavbarRoutes = () => {
    const { userId } = useAuth();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isTeacher, setIsTeacher] = useState(false);

    useEffect(() => {
      if (userId !== undefined) {
        // Simulate isTeacher check
        setIsTeacher(userId === process.env.NEXT_PUBLIC_TEACHER_ID); // Use NEXT_PUBLIC prefix for env variable
        setIsLoading(false);
      }
    }, [userId]);

    const isTeacherPage = pathname?.startsWith("/dashboard/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === "/dashboard/search";

  if(isLoading) return null;

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href='/dashboard'>
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ): isTeacher ? (
          <Link href='/dashboard/teacher/courses'>
            <Button size="sm" variant="ghost">
              Manage Courses
            </Button>
          </Link>
        ) : null }
          <UserButton 
            afterSignOutUrl="/"
          />
      </div>
    </>
  )
}

export default NavbarRoutes