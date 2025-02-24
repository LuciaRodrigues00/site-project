import Button from "@/components/Button";
import TitleSection from "@/components/TitleSection";

export default function ThirdBlock2() {
    return (
        <>
            <section id="how-it-works" className="container mb-[72px]">
                <div className="flex flex-col">
                    <div className="max-w-[550px] mx-auto mb-11">
                        <TitleSection title="How it Works" position="center" />
                        <div className="w-60 bg-primary h-[3px] mx-auto mt-1 mb-4"></div>
                        <p className="text-center">Secure your insurance coverage with ease, following just three straightforward steps.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 mb-11 gap-[50px]">
                        <div className="flex" data-aos="fade-up">
                            <span className="flex flex-shrink-0 text-[76px] leading-[60px] font-black text-title mr-4 min-w-[70px]">1.</span>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-primary font-bold">Inquiry call</h3>
                                <p>Discuss your coverage <br className="hidden lg:block" />needs with a licensed agent</p>
                            </div>
                        </div>
                        <div className="flex" data-aos="fade-up" data-aos-delay="200">
                            <span className="flex flex-shrink-0 text-[76px] leading-[60px] font-black text-title mr-4 min-w-[70px]">2.</span>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-primary font-bold">Quote Review Call</h3>
                                <p>Review your personalized insurance plan</p>
                            </div>
                        </div>
                        <div className="flex" data-aos="fade-up" data-aos-delay="400">
                            <span className="flex flex-shrink-0 text-[76px] leading-[60px] font-black text-title mr-4 min-w-[70px]">3.</span>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-primary font-bold">Easy Onboarding</h3>
                                <p>Choose your billing preferences</p>
                            </div>
                        </div>
                    </div>
                    <Button text="Get a Free Quote Today!" link="#contact" className="mx-auto h-9 delay-animation" dataAos="fade-up" dataAosOnce={false} />
                </div>
            </section>
        </>
    )
}