/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FiPrinter, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { IconBrandInstagram, IconMail, IconMap, IconPhone } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-tertiary text-white w-full pt-20 pb-10">
        <div className="container flex">
          <div className="w-full flex flex-col items-center gap-y-8 md:gap-y-0 md:items-start md:flex-row md:justify-between">
            <Image src="/banner/logo3.svg" width={100} height={100} alt="Logo" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-center md:text-left">
                Contato
              </h2>
              <div className="flex flex-col gap-y-4 mt-3 items-center md:items-start">
                <div
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <IconPhone color="#ffc83a" size="20" />
                  <span className="ml-2">(11) 9 5808-9527</span>
                </div>
                <div
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <IconMail color="#ffc83a" size="20" />
                  <span className="ml-2">corretoraluciadrodrigues@gmail.com</span>
                </div>
                {/* <div
                  className="flex items-center transition-colors hover:text-primary"
                >
                  <IconBrandInstagram color="#ffc83a" size="20" />
                  <span className="ml-2">
                    @LúciaD.Rodrigues
                  </span>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-4 mt-3">
                <span className="ml-2">
                  Lúcia D. Rodrigues
                </span>
                <span className="ml-2">
                  CRECI 247513F
                </span>
              </div>
              <div className="flex flex-col gap-y-4 mt-3">

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
