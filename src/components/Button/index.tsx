import { SmoothScroll } from '@/app/utils/SmoothScroll';
import Link from 'next/link';
import React, { useEffect } from 'react';

type BoxColor = 'transparent' | 'primary';

interface ColoredBoxProps {
    color?: BoxColor;
    text: string;
    link: string;
    className?: string;
    dataAos?: string;
    dataAosOffset?: string;
    dataAosOnce?: boolean
    dataAosDelay?: string
}



const Button: React.FC<ColoredBoxProps> = ({ color = "primary", text, link, className = '', dataAos, dataAosOffset = "0", dataAosOnce = true, dataAosDelay = "0" }) => {
    const getColorHex = (color: BoxColor): string => {
        switch (color) {
            case 'primary':
                return 'bg-primary text-white !transition-all hover:bg-tertiary';
            case 'transparent':
                return 'bg-transparent text-black border';
            default:
                return 'bg-primary text-white';
        }
    };

    const boxClassName = `w-fit py-1 px-4 ${getColorHex(color)}`;

    useEffect(() => {
        SmoothScroll()
    }, []);

    return (
        <Link href={link} className={`flex items-center justify-center rounded-lg ${boxClassName} ${className}`} data-aos={dataAos} data-aos-offset={dataAosOffset} data-aos-once={dataAosOnce} data-aos-delay={dataAosDelay}>
            {text}
        </Link>
    );
};

export default Button;
