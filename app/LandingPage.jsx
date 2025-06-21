"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className={`w-full h-full`}>
        <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12 ">
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <Link href="/docs" className="inline-flex">
                  <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5  backdrop-blur-xl bg-gradient-to-r from-amber-950 to-orange-900 text-slate-200">
                      How to use? ⚡️
                      <span className="inline-flex items-center pl-2 text-black dark:text-white">
                        Read Here{" "}
                        <ArrowRight
                          className="pl-0.5 text-black dark:text-white"
                          size={16}
                        />
                      </span>
                    </div>
                  </span>
                </Link>
              </div>
              <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-[#FED000] via-[#FF8A09] to-[#FF5E1E] bg-[200%_auto] bg-clip-text leading-tight text-transparent font-bold">
                  Documentation Template
                </span>
                Collection of modern,{" "}
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
                Ready-to-use, simply clone this repository into your pc and
                start with adding{" "}
                <span className="p-1 rounded-md bg-white/10">`page.mdx`</span>{" "}
                file to create documentation.
              </p>
              <div className="mt-10 flex gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF8A09] to-[#FF5E1E] rounded-md text-black font-semibold"
                >
                  <div className="flex items-center gap-x-4">
                    Get Started <ArrowRight className="pl-0.5" size={16} />
                  </div>{" "}
                </Link>
              </div>
            </div>
          </div>

          <footer>
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-neutral-800 dark:text-neutral-200">
                Made by
                <a
                  href="https://www.linkedin.com/in/md-mofazzal-hossain-789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-neutral-950 dark:text-neutral-100"
                >
                  @MdMofazzalHossain789
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
