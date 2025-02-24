/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { IconBath, IconBed, IconCar, IconCarGarage, IconChevronLeft, IconChevronRight, IconMaximize, IconResize, IconRuler2 } from "@tabler/icons-react";
import Link from "next/link";
import { allHomes } from "@/app/allHomes";

type Property = {
  garage: any;
  slug: any;
  id: any;
  price: any;
  size: any;
  bedrooms: any;
  bathrooms: any;
  images: any;
  address: any;
  description: any;
};

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (direction: "next" | "prev") => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImage((prev) => {
        if (direction === "next") {
          return (prev + 1) % property.images.length;
        } else {
          return (prev - 1 + property.images.length) % property.images.length;
        }
      });
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="bg-white border lg:border-none lg:shadow-md overflow-hidden rounded-lg relative">
      <div className="relative group">
        <img
          src={property.images[currentImage]}
          alt={property.address}
          className={`w-full h-56 object-cover transition-opacity duration-300 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
        />

        <button
          onClick={() => changeImage("prev")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-50 transition-opacity duration-75"
        >
          <IconChevronLeft />
        </button>
        <button
          onClick={() => changeImage("next")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-50 transition-opacity duration-75"
        >
          <IconChevronRight />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-2xl text-gray-700 font-bold">{property.price}</h3>
        <div className="flex w-full justify-between">
          <div className="flex gap-2 items-center">
            <IconRuler2 className="w-5 h-5" />
            {property.size}m²
          </div>
          <div className="flex gap-2 items-center">
            <IconBath className="w-5 h-5" />
            {property.bathrooms}
          </div>
          <div className="flex gap-2 items-center">
            <IconBed className="w-5 h-5" />
            {property.bedrooms}
          </div>
          <div className="flex gap-2 items-center">
            <IconCar className="w-5 h-5" />
            {property.garage ?? 0}
          </div>
        </div>
        <p className="text-gray-700 text-base line-clamp-1 truncate">
          {property.description}
        </p>
        <p className="text-gray-500 text-xs line-clamp-1 truncate">{property.address}</p>
        <Link
          href={`/${property.slug}`}
          className="mt-auto text-center text-white bg-primary text-sm px-6 py-2 rounded hover:bg-secondary hover:text-white transition"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

const PropertyList = () => {
  return (
    <section className="pt-4 pb-4 lg:pt-[76px] lg:pb-[72px] sm:pt-[15px] sm:pb-[15px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 container">
        {[...allHomes]
          .sort((a, b) => {
            const priceA = parseFloat(a.price.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
            const priceB = parseFloat(b.price.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
            return priceB - priceA;
          })
          .map((property: Property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </div>
    </section>
  );
};

export default PropertyList;
