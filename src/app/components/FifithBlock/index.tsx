/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, A11y } from "swiper/modules";
import { IoStar } from 'react-icons/io5'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import 'swiper/css';

export default function FifithBlock() {
    return (
        <>
            <section id="testimonials" className="container mb-11">
                <h2 className="font-bold text-title mb-3 text-[40px] leading-[48px]">What our <span className="text-primary">customers <br />say </span>about us</h2>
            </section>
            <div className='max-w-full overflow-x-hidden mb-[72px] px-6 md:px-0' data-aos="fade-in" data-aos-delay="200" data-aos-once="true">
                <div className='relative'>
                    <Swiper
                        spaceBetween={25}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: false,
                        }}
                        centeredSlides={true}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}
                        loop
                        initialSlide={8}
                        loopedSlides={3}
                        loopPreventsSliding
                        slidesPerView={6}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5
                            },
                            1600: {
                                slidesPerView: 6
                            },
                            1920: {
                                slidesPerView: 8,
                                initialSlide: 8
                            }
                        }}
                        modules={[Navigation, Pagination, FreeMode, A11y]}
                    >
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='border-[1px] solid p-4 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] w-full rounded-xl my-4'>
                                <p className='text-text font-bold'>Carolina Costa</p>
                                <p className='text-primary text-sm'>Car insurance</p>
                                <p className='my-2 text-sm'>
                                    “Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.”
                                </p>
                                <div className='flex gap-0.5'>
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                    <IoStar fill="#FFA51E" size="14" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='relative mx-auto w-fit flex gap-5 items-center mt-5'>
                        <div className="prev"><FaArrowLeft size="18" fill="#5EB93E" /></div>
                        <div className="swiper-pagination"></div>
                        <div className="next"><FaArrowRight fill="#5EB93E" size="18" /></div>
                    </div>
                </div>
            </div >
        </>
    )
}