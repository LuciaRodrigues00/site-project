/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import TitleSection from "@/components/TitleSection";
import Image from "next/image";

export default function FourthBlock() {
    return (
        <>
            <section id="ourTeam" className="bg-custom mb-[62px] w-full flex justify-center">
                <div className="flex flex-col justify-center py-16 lg:max-w-[1032px] px-6 md:px-0 lg:py-0 lg:flex-row lg:ml-[10vw]">
                    <div className="flex flex-col justify-center mb-8 lg:mb-0 lg:text-right">
                        <div className="md:px-6 lg:px-0 lg:max-w-[640px] lg:min-w-[101%]" data-aos="fade-in" data-aos-delay="200" data-aos-once="true">
                            <span className="italic font-light">Team</span>
                            <TitleSection title="Tim Karlowicz" />
                            <span className="text-primary">President & Founder</span>
                            <p className="mt-5">
                                When it comes to insurance, I strongly believe an insurance agent’s
                                most important duty is to educate and inform customers on appropriate coverages and needs.
                            </p>
                            <p className="mt-4">
                                I am originally from Massachusetts and have always wanted to give back
                                to the community! 
                            </p>                            
                            <p className="mt-4">
                                I created Lúcia D. Rodriguess to provide a pressure free sales
                                experience for my customers with customer satisfaction as a top priority.
                            </p>
                        </div>
                    </div>
                    <Image src={"/fourth/hero.webp"} width={344} height={516} loading="lazy" alt="Team - Tim Karlowicz - President & Founder" title="President & Founder - Lúcia D. Rodriguess" className="mx-auto w-full object-cover md:px-6 md:max-h-[650px] md:object-[0_-110px] lg:object-contain lg:max-h-[inherit] lg:object-[inherit] lg:px-0 lg:mr-0 lg:ml-14 lg:w-[340px]" data-aos="fade-left" data-aos-delay="200" data-aos-once="true" />
                </div>
            </section>
        </>
    )
}