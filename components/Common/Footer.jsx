import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray pt-10">
        <div className="container px-10 flex flex-col">
          <div className=" flex items-center  mb-5 ">
            <div className=" h-[1px] opacity-40 w-full bg-white"></div>
            <Image
              src="/img/tisum_logo.png"
              alt="logo "
              width={110}
              height={30}
              className="mx-10"
            />
            <div className=" h-[1px] opacity-40 w-full bg-white"></div>
          </div>
          <div className="grid xs:grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 mb-[30px]">
            <div className="flex flex-col">
              <h4 className="footer_heading">About Fresha</h4>
              <ul className="flex flex-col">
                <li className="link_footer_check">
                  <Link href="#"> Careers</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Customer Support</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Blog</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="footer_heading">For business</h4>
              <ul className="flex flex-col">
                <li className="link_footer_check">
                  <Link href="#"> For partners</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Pricing</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Support</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="footer_heading">Legal</h4>
              <ul className="flex flex-col">
                <li className="link_footer_check">
                  <Link href="#"> Privacy Policy</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Terms of service</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Terms of use</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="footer_heading">Find us on social</h4>
              <ul className="flex flex-col">
                <li className="link_footer_check">
                  <Link href="#"> Facebook</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> twitter</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Linkdin</Link>
                </li>
                <li className="link_footer_check">
                  <Link href="#"> Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" h-[1px] opacity-40 w-full bg-white"></div>
          <div className="footer_Ptt_links ">
            <div>
              <Link
                href="#"
                className='sm:after:content-["|"] after:ml-4 after:text-[12px] after:text-white'
              >
                <span>Privacy Policy</span>
              </Link>
            </div>

            <div>
              <Link
                href="#"
                className='sm:after:content-["|"] after:ml-4 after:text-[12px] after:text-white'
              >
                <span>Terms of service</span>
              </Link>
            </div>
            <div>
              <Link href="#">
                <span>Terms of user </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
