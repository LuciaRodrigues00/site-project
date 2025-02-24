"use client"

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
import Banner from "../components/Banner";
import ContactBlock from "../components/ContactBlock";
import { InternalHome } from "../components/InternalHome";



export default function InternaMoveis() {
  return (
    <main>
      <Header />
      <InternalHome />
      <Footer />
      <ToastContainer />
    </main>
  )
}
