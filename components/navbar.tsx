"use client";

import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between px-6 py-4 shadow-md bg-white">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
                </div>
            </Link>

            <div className="flex items-center gap-6">
                <NavItems />

                <SignedOut>
                    <div className="flex gap-2">
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </div>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
