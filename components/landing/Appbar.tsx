import { ArrowRight } from "lucide-react"
import { buttonVariants } from "../ui/button"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image";
import Logo  from "@/public/landing-logo.png";

const Appbar = () => {
  return (
    <nav className="sticky h-14 inser-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg trasition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/' className="flex z-40 font-semibold items-center justify-center">
                    <Image src={Logo} alt="Emblem" width={50} height={50}/>
                    <span>Sardar of Physics</span>
                </Link>

                {/* todo: mobile navbar */}
                <div className="flex items-center space-x-4 ">
                    <>
                    <Link
                    href='#courses'
                    className={cn(buttonVariants({
                        variant: 'ghost',
                        size: 'sm'
                    }), "hidden sm:flex")}
                    >
                    Explore Courses
                    </Link>
                    <Link
                    href='/sign-in'
                    className={buttonVariants({
                        size: 'sm'
                    })}
                    >
                    Sign In {/* <ArrowRight className="hidden sm:flex ml-1.5 h-5 w-5"/> */}
                    </Link>
                    <Link
                    href='/sign-up'
                    className={buttonVariants({
                        size: 'sm',
                        variant: 'outline',
                    })}
                    >
                    Sign Up <ArrowRight className="hidden sm:flex ml-1.5 h-5 w-5"/>
                    </Link>
                    </>
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Appbar