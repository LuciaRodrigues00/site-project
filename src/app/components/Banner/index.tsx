export default function Banner() {
  return (
    <>
      <section
        id="banner"
        className="flex flex-col items-center justify-center w-full min-h-[32vh] sm:min-h-[50vh] lg:min-h-[495px] banner-topo lg:flex-row"
      >
        <div className="container px-4 sm:px-6">
          <div
            className="mt-12 sm:mt-20 lg:mt-0 lg:max-w-[650px] lg:mb-0"
            data-aos="fade-in"
          >
            <div className="bg-white/90 rounded-xl w-full p-4 sm:p-6 md:p-8 xl:p-12 shadow-lg text-center md:text-left">
              <h1 className="font-bold text-tertiary mb-3 text-2xl sm:text-3xl md:text-4xl leading-tight">
                <span className="text-primary">Transformando</span> a sua jornada rumo à casa dos sonhos
              </h1>
              <p className="text-tertiary text-sm sm:text-base md:text-lg">
                Deixe-me te ajudar a encontrar o imóvel perfeito para chamar de lar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}