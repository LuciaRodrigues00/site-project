/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import TitleSection from "@/components/TitleSection";

export default function Maia() {
  return (
    <>
      <section id="how-it-works" className="container mb-[72px]">
        <div className="flex lg:flex-row flex-col items-center gap-[30px]" data-aos="fade-up">
          <img
            src={"/maia.png"}
            width={80}
            height={80}
            loading="lazy"
            alt="Partner - Lúcia D. Rodriguess"
            title="Partner - Lúcia D. Rodriguess"
            className=" object-fit "
            // className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-once="true"
          />
          <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <h1 className="font-bold  text-primary mb-3 text-[32px] leading-[48px]">
              <span className="text-title">
                Massachusetts Association of Insurance Agents
              </span>{" "}
              (MAIA)
            </h1>
            <p>We strengthen independent insurance agencies through education, business resources, and advocacy.</p>

          </div>
        </div>
      </section>
    </>
  );
}
