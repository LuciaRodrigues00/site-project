/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FiPrinter, FiMail } from "react-icons/fi";
import useContactForm from "./useContactForm";
import sendEmail from "@/app/services/Email/sender";
import { toast } from "react-toastify";
import Image from "next/image";
import { IconMail, IconPhone } from "@tabler/icons-react";

export default function ContactBlock() {
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { nome, email, telefone, mensagem } = form;

    // Formata a mensagem
    const text = `Olá, meu nome é ${nome}.%0A
    Email: ${email}%0A
    Telefone: ${telefone}%0A
    Mensagem: ${mensagem}`;

    const phone = "5511958089527";

    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section
        className="container mt-10 lg:mt-28 shadow-[0px_0px_22px_0px_rgba(0,_0,_0,_0.15)] p-8 rounded-2xl -mb-12 z10 relative bg-white max-[1024px]:max-w-[calc(100%_-_3rem)] max-lg:max-w-[calc(100%_-_3rem)] lg:px-16 lg:py-14"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-transition="1000"
        data-aos-once="false"
      >
        <div className="flex md:flex-row">
          <form
            id="contact"
            action=""
            className="max-w-[414px] w-full"
          >
            <span className="text-xl">
              Estamos{" "}
              <span className="text-primary font-bold"> esperando por você</span>
            </span>
            <div className="w-full flex flex-col items-end">
              <input
                type="text"
                name="nome"
                placeholder="Insira seu nome"
                className="bg-bg w-full p-2 rounded-md border-[1px] mt-4 focus:outline-none"
                id="name"
                value={form.nome}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Insira o seu email"
                className="bg-bg w-full p-2 rounded-md border-[1px] mt-4 focus:outline-none"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="mensagem"
                placeholder="Digite uma mensagem"
                rows={4}
                style={{ resize: "none" }}
                className="bg-bg w-full p-2 rounded-md border-[1px] mt-4 focus:outline-none"
                id="message"
                value={form.mensagem}
                onChange={handleChange}
              />

              <input
                type="submit"
                value="Enviar mensagem"
                onClick={handleSendMessage}
                className="bg-primary text-white px-14 py-2.5 rounded-md mt-7 w-full cursor-pointer focus:outline-none md:w-fit hover:bg-hover transition-colors disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed"
              />
            </div>
          </form>
          <div className="h-full md:mb-0 md:mt-8 md:ml-20">
            <h2 className="hidden lg:block font-bold lg:mt-12 text-textbold my-auto text-4xl min-md:text-5xl lg:leading-[62px] lg:text-[64px]">
              Entre em{" "}
              <span className="text-primary">
                <br /> Contato
              </span>
            </h2>

            {/* <div className="flex flex-col gap-y-4 mt-6">
              <Link
                href=""
                className="flex items-center transition-colors hover:text-primary"
              >
                <IconPhone className="text-tertiary" size="20" />
                <span className="ml-2">(11) 9 5808-9527 </span>
              </Link>
              <Link
                href=""
                className="flex items-center transition-colors hover:text-primary"
              >
                <IconMail className="text-tertiary" size="20" />
                <span className="ml-2">corretoraluciadrogrigues@gmail.com</span>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
