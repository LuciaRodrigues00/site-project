/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IconBat, IconBath, IconBed, IconCar, IconChevronLeft, IconChevronRight, IconRuler2 } from "@tabler/icons-react";
import Image from "next/image";
import { SmoothScroll } from "@/app/utils/SmoothScroll";

interface HomeData {
  slug: string;
  title: string;
  description: string;
  price: string;
  address: string;
  images: string[];
  size: string;
  rooms: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  homeDescription: string
}

export const InternalHome = () => {
  const params = useParams();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [params]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(`/api/homes?id=${params?.id}`);
        if (!response.ok) {
          throw new Error('Falha ao carregar dados do imóvel');
        }
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (params?.id) {
      fetchHomeData();
    }
  }, [params?.id]);

  if (!homeData) return <div>Carregando...</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { nome, email, telefone, mensagem } = form;

    const homeReference = homeData?.slug || "Não informado";

    const text = `Olá, meu nome é ${nome}.%0A
  Email: ${email}%0A
  Telefone: ${telefone}%0A
  Mensagem: ${mensagem}%0A%0A
  Imóvel de referência: ${homeReference}`;

    const phone = "5511958089527";
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };


  return (
    <div className="relative my-16">
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 }, // No mobile, mostra 1 slide por vez
            1024: { slidesPerView: 3 }, // A partir de lg (1024px), mantém 3 slides
          }}
          className="w-full h-[400px] overflow-hidden"
          >
          {homeData.images.map((image, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover sm:rounded-none lg:rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões personalizados */}
        <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full">
          <IconChevronLeft className="text-black" />
        </button>
        <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full">
          <IconChevronRight className="text-black" />
        </button>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Imagem Expandida" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )}

      {/* Descrição e formulário */}
      <div id="homeData" className="flex flex-col lg:flex-row container mx-auto p-4">
        {/* Descrição */}
        <div className="flex flex-col lg:w-2/3 gap-2">
          <div className="mt-4">
            <span className="text-gray-800 text-sm">A partir de</span>
            <h2 className="text-4xl font-extrabold text-black">{homeData?.price}</h2>

            <div className="my-4  text-gray-700 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:items-center sm:gap-12">
              <span className="flex items-center gap-2"><IconRuler2 /> {homeData?.size ?? "-"} m²</span>
              <span className="flex items-center gap-2"><IconBed />{homeData?.bedrooms ?? "-"} quartos</span>
              <span className="flex items-center gap-2"><IconBath /> {homeData?.bathrooms ?? "-"} banheiros</span>
              <span className="flex items-center gap-2"><IconCar /> {homeData?.garage ?? "-"} vagas</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:mr-20">
            <span className="text-lg font-bold text-gray-700">Descrição do imóvel</span>
            <span className="text-gray-600" style={{ whiteSpace: "pre-line" }}>{homeData?.homeDescription}</span>
          </div>
        </div>

        {/* Formulário */}
        <div className="flex flex-col lg:w-1/3 mt-6 gap-1 border border-gray-300 rounded-xl p-4 h-fit">
          <h3 className="text-lg font-semibold text-gray-600">Envie uma mensagem</h3>
          <input type="text" name="nome" placeholder="Insira seu nome" className="w-full p-3 border border-gray-300 rounded-xl mt-2" value={form.nome} onChange={handleChange} />
          <input type="email" name="email" placeholder="Insira seu e-mail" className="w-full p-3 border border-gray-300 rounded-xl mt-2" value={form.email} onChange={handleChange} />
          <input type="tel" name="telefone" placeholder="Insira seu telefone" className="w-full p-3 border border-gray-300 rounded-xl mt-2" value={form.telefone} onChange={handleChange} />
          <textarea name="mensagem" className="w-full p-3 border border-gray-300 rounded-xl mt-2" rows={5} placeholder="Escreva sua mensagem" value={form.mensagem} onChange={handleChange} />
          <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-2 rounded-xl mt-4" onClick={handleSendMessage}>
            Enviar mensagem
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Ao clicar em Enviar mensagem e/ou WhatsApp, estou ciente e concordo com os
            <a className="text-blue-600"> Termos de uso</a>. Seus dados serão compartilhados com anunciantes para viabilizar o contato solicitado.
            Acesse a nossa <a className="text-blue-600">Política de privacidade</a>.
          </p>
        </div>
      </div>
    </div>

  );
};
