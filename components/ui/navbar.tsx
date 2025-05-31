"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <nav className="top-0 z-50 bg-black text-white px-4 md:px-8 lg:px-12 mt-4 mb-4 rounded-full py-4">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-[#CCFF00]">.</span>jobwhee
        </Link>

        {/* Navbar Links - Hidden on Small Screens */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/post-job" className="hover:text-gray-300 transition-colors">
            Post a Job
          </Link>
          <Link href="/explore-jobs" className="hover:text-gray-300 transition-colors">
            Explore Jobs
          </Link>
          <Link href="/how-it-works" className="hover:text-gray-300 transition-colors">
            How it Works
          </Link>
        </div>

        {/* Right Section - Language Selector & Sign In/Up */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Image
                src="/britain.png"
                alt="English"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>EN</span>
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  isLangDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 top-full w-40 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-visible">
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-black">
                    <Image
                      src="/britain.png"
                      alt="English"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>English</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-black">
                    <Image
                      src="/greece.png"
                      alt="Greek"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>Greek</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sign In & Sign Up Buttons */}
          <Link
            href="/sign-in"
            className="hidden md:block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
