"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, ArrowRight, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "EDUCATION AND TUTORING",
    "GRAPHIC DESIGN",
    "WEB DEVELOPMENT",
    "CONTENT WRITING",
    "DIGITAL MARKETING"
  ];

  return (
    <section className="relative">
      <div className="w-full h-[500px] md:h-[550px] lg:h-[600px] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/heroimg.jpg"
            alt="Professional working on laptop"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent" />
          <div className="absolute inset-x-0 -bottom-12 h-24 rounded-t-[50%]" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          {/* Mobile Overlay Text */}
          <div className="md:hidden w-full max-w-md bg-gray-800/30 backdrop-blur-sm text-white p-6 mb-4 rounded-tl-[4rem] rounded-tr-[3rem] rounded-bl-[2rem] rounded-br-[1rem]">
            <h1 className="text-xl font-semibold">
              FIND THE <span className="text-[#CCFF00]">TALENT</span> SIGN UP <br />
              & GET THE <span className="text-[#CCFF00]">JOB</span> DONE
            </h1>
          </div>

          {/* Tablet/Desktop Overlay Text */}
          <div className="hidden md:flex justify-between w-full max-w-6xl">
            <div className="bg-gray-800/30 backdrop-blur-sm text-white p-8 max-w-md mb-4 rounded-tl-[6rem] rounded-bl-[2rem] rounded-br-[1rem]">
              <h1 className="text-xl lg:text-2xl text-center font-semibold">
                FIND THE <span className="text-[#CCFF00]">TALENT</span> SIGN UP <br />
                & GET THE <span className="text-[#CCFF00]">JOB</span> DONE
              </h1>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm text-white p-8 max-w-xs rounded-tl-[1rem] rounded-bl-[2rem] rounded-br-[5rem]">
              <h2 className="text-xl lg:text-2xl font-semibold">
                WE'LL <span className="text-[#CCFF00]">HANDLE</span> THAT
              </h2>

              <button className="mt-4 group flex items-center space-x-2 bg-[#CCFF00] text-black rounded-full px-5 py-3 font-semibold hover:bg-[#B8E600] transition-all">
                <span>Sign Up for Contract</span>
                <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Call to Action */}
          <div className="md:hidden w-full max-w-md bg-gray-800/70 backdrop-blur-sm text-white p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              WE'LL <span className="text-[#CCFF00]">HANDLE</span> THAT
            </h2>

            <button className="group flex items-center space-x-2 bg-[#CCFF00] text-black rounded-full px-5 py-3 font-semibold hover:bg-[#B8E600] transition-all">
              <span>Sign Up for Contract</span>
              <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-lg lg:max-w-xl relative z-10">
            <div className="relative">
              <div className="flex rounded-full bg-white overflow-hidden shadow-lg">
                <div className="p-3 pl-5">
                  <Search size={24} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Find a job, talent or service"
                  className="w-full py-3 px-2 focus:outline-none text-black"
                />
                <div className="relative">
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="h-full px-4 py-3 flex items-center space-x-2 text-black font-medium border-l border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <span>Talent</span>
                    <ChevronDown size={20} className={cn(
                      "transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100">
                      <div className="p-2">
                        <button className="w-full px-4 py-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Users className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">Talent</div>
                            <div className="text-sm text-gray-500">Hire professionals effortlessly</div>
                          </div>
                        </button>

                        <button className="w-full px-4 py-3 flex items-center space-x-3 rounded-lg hover:bg-gray-50">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">Client</div>
                            <div className="text-sm text-gray-500">Apply to jobs posted by clients</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Adjusted Category Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 flex flex-col items-center mt-6 sm:mt-4">
            <div className="flex space-x-1 mb-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    "h-2 w-2 rounded-full cursor-pointer transition-all duration-300", 
                    index === activeSlide ? "bg-[#CCFF00] scale-125" : "bg-gray-400 hover:bg-gray-300"
                  )}
                />
              ))}
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="font-bold text-black">{categories[activeSlide]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;