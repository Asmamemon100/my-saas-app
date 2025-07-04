import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const navbar = () => {
  return (
      <nav className= "navbar">
          <Link href="/">
              <div className="flex items-cener gap-2.5 cursor-pointer">
                  <Image  src="/images/logo.svg"
                          alt="logo"
                          width={46}
                          height={44}
                  />
              </div>
          </Link>
          <div className="flex items-baseline-center gap-8">
            <NavItems />
              <p>Sign In</p>
          </div>

      </nav>
  )
}

export default navbar;

