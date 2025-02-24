/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Button from "@/components/Button";
import TitleSection from "@/components/TitleSection";
import Image from "next/image";

export default function ThirdBlock() {
  return (
    <>
      <section id="how-it-works" className="container mb-[72px]">
        <div className="flex flex-col">
          <div className="max-w-[550px] mx-auto mb-11">
            <TitleSection title="Partners" position="center" />
            <div className="w-60 bg-primary h-[3px] mx-auto mt-1 mb-4"></div>
            <p className="text-center">
              Some of our partners, to deliver the best insurance solution for
              you!
            </p>
          </div>
          <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-4 mb-11 gap-[50px]">
            <div className="flex" data-aos="fade-up">
              <Image
                src={"/partners/universal.png"}
                height={60}
                width={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="200">
              <Image
                src={"/partners/bristol.png"}
                height={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="400">
              <Image
                src={"/partners/pgr.png"}
                height={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="400">
              <Image
                src={"/partners/hartford.png"}
                height={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="400">
              <Image
                src={"/partners/amtrust.png"}
                height={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="400">
              <Image
                src={"/partners/plymouth_rock.png"}
                height={60}
                loading="lazy"
                alt="Partner - Lúcia D. Rodriguess"
                title="Partner - Lúcia D. Rodriguess"
                className=" object-fit "
                // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              />
            </div>
          </div>
          <Button
            text="Get a Free Quote Today!"
            link="#contact"
            className="mx-auto h-9 delay-animation"
            dataAos="fade-up"
            dataAosOnce={false}
          />
        </div>
      </section>
    </>
  );
}
