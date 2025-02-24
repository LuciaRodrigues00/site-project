"use client"

import { Header } from "@/components/Header";
import Banner from "./components/Banner";
import SecondBlock from "./components/SecondBlock";
import ThirdBlock from "./components/ThirdBlock";
import FourthBlock from "./components/FourthBlock";
// import FifithBlock from "./components/FifithBlock";
import Footer from "@/components/Footer";
import ContactBlock from "./components/ContactBlock";

import { cache, useEffect } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aos from "aos";
import "aos/dist/aos.css";
import ThirdBlock2 from "./components/ThirdBlock2";
import Maia from "./components/Maia";
import Team from "./components/Team";
import FirstBlock from "./components/FirstBlock";
export const revalidate = 3600


export default function Home() {
  useEffect(() => {
    const initAOS = cache(async () => {
      await Aos.init({
        delay: 0,
        duration: 250,
        easing: "ease-in-out"
      });
    });

    initAOS();
  }, []);

  return (
    <main>
      <Header />
      <Banner />
      <FirstBlock />
       <SecondBlock />
      {/* <ThirdBlock />
      
      <FourthBlock />
      <Team/>
      <ThirdBlock2 />
      <Maia /> */} 
      {/* <FifithBlock /> */}
      <ContactBlock />
      <Footer />
      <ToastContainer />
    </main>
  )
}
