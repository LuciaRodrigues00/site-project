import Image from "next/image";
import Button from "@/components/Button";

export default function SecondBlock() {
  return (
    <section className="flex flex-col lg:flex-row items-center banner-bg overflow-hidden lg:p-14 p-4">
      {/* Imagem */}
      <div className="relative w-full lg:w-1/2">
      </div>

      {/* Texto e Botão */}
      <div className="bg-white/90 rounded-xl shadow-lg w-full lg:w-1/3 flex flex-col justify-center p-6 lg:p-12">
        <div>
          <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
            LÚCIA D. RODRIGUES
          </h2>
        </div>
        <h3 className="text-2xl font-bold text-tertiary mt-2">
          Te ajudando a transformar grandes sonhos em dia-a-dia
        </h3>
        <p className=" mt-4 text-tertiary">
          Olá, eu sou Lúcia Rodrigues corretora de imóveis, qualificada em Périto judicial e avaliação de imóveis. Atendo na região de Suzano e Alto tietê, SP.
        </p>
        <p className="text-xs mt-4 text-gray-600 font-semibold">CRECI - 247513F</p>

      </div>
    </section>
  );
}
