import Image from "next/image"
import Landinglogo from "@/public/landing-logo.png"

const Logo = () => {
  return (
    <div className="flex font-semibold items-center justify-center">
      <Image
      height={60}
      width={60}
      alt="logo"
      src={Landinglogo}
      />
      <span>Sardar of Physics</span>
    </div>
  )
}

export default Logo