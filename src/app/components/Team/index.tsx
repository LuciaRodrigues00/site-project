/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

export default function Team() {
  return (
    <>
      <section id="testimonials" className="container mb-11">
        <h2 className="font-bold text-title mb-3 text-[40px] leading-[48px]">
          Our <span className="text-primary">team</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-3 border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] rounded-xl my-4 w-full md:w-[244px]">
            <div className="h-[244px]">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={"/fourth/tim.png"}
                loading="lazy"
                alt="Team - Tim Karlowicz - President & Founder"
                title="President & Founder - Lúcia D. Rodriguess"
              />
            </div>
            <div>
              <p className="text-text font-bold">Tim Karlowicz</p>
              <p className="text-primary text-sm">President & Founder</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] rounded-xl my-4 w-full md:w-[244px]">
            <div className="h-[244px]">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={"/fourth/justin.png"}
                loading="lazy"
                alt="Team - Justin Bourque - Insurance Producer"
                title="Insurance Producer - Lúcia D. Rodriguess"
              />
            </div>
            <div>
              <p className="text-text font-bold">Justin Bourque</p>
              <p className="text-primary text-sm">Insurance Producer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
