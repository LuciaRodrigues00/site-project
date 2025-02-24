import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { SmoothScroll } from "@/app/utils/SmoothScroll";
import { useParams } from "next/navigation";

export const Header = () => {
  const [scrollBgClass, setScrollBgClass] = useState("bg-transparent");
  const [activeSection, setActiveSection] = useState<string>("banner");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollBgClass("bg-primary shadow-md");
      } else {
        setScrollBgClass("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 w-full top-0 transition-all duration-300 ${scrollBgClass}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-1">
        {/* Logo */}
        <Image src="/banner/logo2.svg" className="my-2" width={40} height={40} alt="Logo" />

        {/* Menu Desktop */}
        <div className="lg:flex space-x-4 items-center">
          <Link href="/" className={`${params?.id ? "text-gray-600 hover:text-gray-400" : "text-white hover:text-gray-200"}  transition`}>
            Início
          </Link>
          <Button link="#contact" text="Contato" color="primary" className="hidden lg:flex" />
        </div>
      </div>
    </nav>
  );
};
