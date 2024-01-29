import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <section className="  opacity-100  absolute top-0 py-4 w-full z-50">
      <div className="container">
        <div className="Header_wrapper">
          <div className="flex items-center justify-center gap-10">
            <div>
              <Image
                src="/img/tisum_logo.png"
                alt="This is the logo of tisum design"
                width={500}
                height={500}
                className="md:w-[80px] w-[130px] "
              />
            </div>
            <div>
              <ul className="md:flex items-center justify-center gap-4 lg:gap-8 py-2 hidden">
                <li>
                  <Link href="#" className="navlinks_text">
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="flex items-center gap-2">
                        <span className="navlinks_text">Services</span>
                        <Image
                          src="/img/chevron-down.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="text-sm">
                        Nail Art
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-sm">
                        Hair Curling
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-sm">
                        Spa
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="flex items-center gap-2">
                        <span className="navlinks_text">Resources</span>
                        <Image
                          src="/img/chevron-down.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="text-sm">
                        Iora
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-sm">
                        Membrane
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-sm">
                        Aura
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href="#" className="navlinks_text">
                    For Business
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" z-50">
            <button className="signup_button">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
