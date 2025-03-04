export const allHomes = [
  {
    id: 1,
    slug: "imovel-1",
    price: "R$ 2.300.000,00",
    size: 300,
    garage: 4,
    bedrooms: 5,
    bathrooms: 1,
    images: Array.from(
      { length: 27 },
      (_, i) => `/homes/imovel-1/imovel-${i + 1}.jpeg`,
    ),
    address: "Mogi das Cruzes - SP",
    description: "Condomínio Veredas",
    homeDescription: `
    Mogi das Cruzes - SP / Condomínio Veredas

    Localizado em um dos condomínios mais exclusivos de Mogi das Cruzes, o Condomínio Veredas, este imóvel é a opção ideal para quem busca sofisticação, segurança e espaço. Com uma área total de 300 m², esta propriedade foi projetada para oferecer conforto e funcionalidade em cada detalhe. Está à venda por R$ 2.300.000,00 e representa uma excelente oportunidade para quem deseja morar com qualidade de vida.
    
    O imóvel conta com uma distribuição inteligente dos espaços e acabamentos de alto padrão:
    
    - 5 amplos quartos, sendo 4 suítes, uma suíte master e com closet, proporcionando espaço e privacidade para toda a família.
    - 1 banheiro bem planejado, com acabamentos modernos e de fácil manutenção.
    - Sala espaçosa e bem iluminada, integrando-se perfeitamente com os demais ambientes.
    - Cozinha moderna, planejada para atender todas as necessidades culinárias da família.
    - 4 vagas de garagem, garantindo segurança e comodidade para os moradores e visitantes.
    - Área externa com paisagismo sofisticado, ideal para momentos de lazer e descanso.
    
    O Condomínio Veredas se destaca pelo alto padrão de infraestrutura e segurança, contando com portaria 24 horas, monitoramento por câmeras, área de lazer completa e fácil acesso a comércios, serviços e principais vias da região.
    
    Essa propriedade é ideal para:
    
    1. Famílias que buscam um imóvel espaçoso, seguro e bem localizado.
    2. Investidores interessados em uma propriedade de alto padrão com excelente valorização.
    3. Quem deseja viver em um ambiente tranquilo, cercado de áreas verdes e estrutura completa.
    
    Agende uma visita e conheça de perto esse imóvel exclusivo!
    `,
  },
  {
    id: 2,
    slug: "imovel-2",
    price: "R$ 230.000,00",
    size: 50,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 25 },
      (_, i) => `/homes/imovel-2/imovel-${i + 1}.jpeg`,
    ),
    address: "Suzano - SP, Bairro Casa Branca",
    description: "Condomínio Predilleto",
    homeDescription: `
      Suzano - SP / Condomínio Predilleto

      Localizado no bairro Casa Branca, em Suzano - SP, o Condomínio Predilleto é a escolha perfeita para quem busca um apartamento funcional e bem localizado. Com uma área de 50 m², este imóvel é ideal para casais ou pequenas famílias. Está à venda por R$ 230.000,00 e representa uma excelente oportunidade de investimento.

      O imóvel conta com:

      - 2 quartos aconchegantes, garantindo conforto e privacidade.
      - 1 banheiro moderno e bem distribuído.
      - Sala de estar integrada, proporcionando um ambiente amplo e funcional.
      - Cozinha compacta, ideal para otimização de espaço.
      - 1 vaga de garagem, trazendo segurança e comodidade.

      O Condomínio Predilleto oferece uma infraestrutura completa, com segurança 24 horas, espaço de lazer e fácil acesso a transporte público, escolas, supermercados e demais comércios locais.

      Agende uma visita e conheça de perto essa oportunidade!
    
    `,
  },
  {
    id: 3,
    slug: "imovel-3",
    price: "R$ 185.000,00",
    size: "-",
    garage: 1,
    bedrooms: 2,
    bathrooms: 1,
    images: Array.from(
      { length: 17 },
      (_, i) => `/homes/imovel-3/imovel-${i + 1}.jpeg`,
    ),
    address: "Braz Cubas, Mogi das Cruzes - SP",
    description: "Condomínio Manacá",
    homeDescription: `
      Braz Cubas, Mogi das Cruzes - SP / Condomínio Manacá

      Situado no bairro Braz Cubas, em Mogi das Cruzes - SP, o Condomínio Manacá é uma excelente opção para quem busca um apartamento aconchegante e bem localizado. Com 2 quartos e 1 banheiro, é perfeito para quem deseja praticidade e um bom custo-benefício. Está à venda por R$ 185.000,00.

      Características do imóvel:

      - 2 quartos bem distribuídos.
      - 1 banheiro funcional com acabamento moderno.
      - Sala de estar integrada.
      - Cozinha prática e bem planejada.
      - 1 vaga de garagem.

      O Condomínio Manacá conta com área de lazer, portaria 24 horas e proximidade a comércios e transporte público.

      Agende sua visita!
    `,
  },
  {
    id: 4,
    slug: "imovel-4",
    price: "R$ 350.000,00",
    size: "-",
    bedrooms: 3,
    bathrooms: 2,
    garage: 0,
    images: Array.from(
      { length: 21 },
      (_, i) => `/homes/imovel-4/imovel-${i + 1}.jpeg`,
    ),
    address: "Poá - SP",
    description: "Condomínio Bonini",
    homeDescription: `
      Poá - SP / Condomínio Bonini

      Localizada em Poá - SP, esta casa ampla no Condomínio Bonini é ideal para famílias que buscam espaço, conforto e segurança. Com 3 quartos e 2 banheiros, essa propriedade é uma ótima oportunidade de investimento. Está à venda por R$ 350.000,00.

      O imóvel possui:

      - 3 quartos amplos e bem iluminados.
      - 2 banheiros com acabamentos modernos.
      - Sala espaçosa e aconchegante.
      - Cozinha funcional e bem distribuída.
      - 2 vagas de garagem.

      O Condomínio Bonini oferece um ambiente tranquilo e seguro, com fácil acesso a transporte público e comércios locais.

      Agende sua visita e venha conhecer!
      `,
  },
  {
    id: 5,
    slug: "imovel-5",
    price: "R$ 200.000,00",
    size: "-",
    bedrooms: 2,
    bathrooms: 1,
    garage: 0,
    images: Array.from(
      { length: 15 },
      (_, i) => `/homes/imovel-5/imovel-${i + 1}.jpeg`,
    ),
    address: "Jardim Santa Tereza",
    description: "Condomínio Santa Tereza",
    homeDescription: `Jardim Santa Tereza / Condomínio Santa Tereza

      O Condomínio Santa Tereza, localizado no Jardim Santa Tereza, oferece um apartamento funcional e bem planejado para quem busca praticidade e conforto. Com 2 quartos e 1 banheiro, é uma excelente opção para quem deseja um imóvel acessível e bem localizado. Está à venda por R$ 200.000,00.

      O imóvel conta com:

      - 2 quartos aconchegantes.
      - 1 banheiro funcional.
      - Sala integrada.
      - Cozinha compacta e bem planejada.
      - 1 vaga de garagem.

      O Condomínio Santa Tereza está próximo a serviços essenciais, como supermercados, escolas e transporte público.

      Agende uma visita e conheça de perto essa oportunidade!`,
  },
  {
    id: 6,
    slug: "imovel-6",
    price: "R$ 280.000,00",
    size: 65,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 18 },
      (_, i) => `/homes/imovel-6/imovel-${i + 1}.jpeg`,
    ),
    address: "Suzano - SP",
    description: "Residencial Nova Vida",
    homeDescription: `Residencial Nova Vida - Suzano

    O Residencial Nova Vida é a escolha ideal para quem busca conforto e qualidade de vida. Com um design moderno e ambientes bem distribuídos, este apartamento de 65m² oferece uma experiência única de moradia. Está à venda por R$ 280.000,00.

    O imóvel conta com:

    - 2 dormitórios espaçosos.
    - 1 banheiro moderno e bem acabado.
    - Sala de estar ampla e iluminada.
    - Cozinha planejada para maior praticidade.
    - 1 vaga de garagem coberta.
    - Área de serviço integrada.

    O condomínio oferece segurança 24h e infraestrutura completa, com playground, salão de festas e áreas de convivência. Está localizado próximo a escolas, supermercados, farmácias e transporte público.

    Agende sua visita e venha conhecer este excelente imóvel!`,
  },
  {
    id: 7,
    slug: "imovel-7",
    price: "R$ 450.000,00",
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    images: Array.from(
      { length: 22 },
      (_, i) => `/homes/imovel-7/imovel-${i + 1}.jpeg`,
    ),
    address: "Mogi das Cruzes - SP",
    description: "Condomínio Jardim Europa",
    homeDescription: `Condomínio Jardim Europa - Mogi das Cruzes

    Localizado em um dos bairros mais valorizados de Mogi das Cruzes, o Condomínio Jardim Europa oferece segurança, lazer e conforto para sua família. Esta casa espaçosa de 120m² proporciona o equilíbrio ideal entre praticidade e sofisticação. Está à venda por R$ 450.000,00.

    O imóvel conta com:

    - 3 dormitórios amplos, sendo 1 suíte.
    - 2 banheiros bem distribuídos.
    - Sala de estar e jantar integradas.
    - Cozinha funcional com planejados.
    - Área de serviço independente.
    - 2 vagas de garagem.

    O condomínio conta com segurança 24h, salão de festas, piscina e espaço de lazer para crianças. Está próximo a comércios, escolas e tem fácil acesso ao transporte público.

    Não perca essa oportunidade! Agende sua visita.`,
  },
  {
    id: 8,
    slug: "imovel-8",
    price: "R$ 750.000,00",
    size: 70,
    bedrooms: 2,
    bathrooms: 2,
    garage: 1,
    images: Array.from(
      { length: 16 },
      (_, i) => `/homes/imovel-8/imovel-${i + 1}.jpeg`,
    ),
    address: "Mogi das Cruzes",
    description: "Condomínio My Helbor.",
    homeDescription: `Condomínio My Helbor - Mogi das Cruzes

    O Condomínio My Helbor é sinônimo de sofisticação e praticidade, oferecendo um estilo de vida moderno e confortável. Este apartamento de 70m² é perfeito para quem busca um imóvel de alto padrão com excelente localização. Está à venda por R$ 750.000,00.

    O imóvel conta com:

    - 2 dormitórios, sendo 1 suíte elegante.
    - 2 banheiros modernos e bem equipados.
    - Sala de estar e jantar integradas.
    - Cozinha planejada com ótimo aproveitamento de espaço.
    - Área de serviço independente.
    - 1 vaga de garagem.

    O condomínio possui uma infraestrutura completa, incluindo piscina, academia, salão de festas e segurança 24h. Sua localização privilegiada facilita o acesso a shopping centers, restaurantes e serviços essenciais.

    Agende sua visita e venha se encantar com este imóvel exclusivo!`,
  },
  {
    id: 9,
    slug: "imovel-9",
    price: "R$ 220.000,00",
    size: 54,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 18 },
      (_, i) => `/homes/imovel-9/imovel-${i + 1}.jpeg`,
    ),
    address: "Vila Urupês Suzano",
    description: "Condomínio Portal das Artes.",
    homeDescription: `Condomínio Portal das Artes - Vila Urupês, Suzano

    Situado em uma das regiões mais tranquilas de Suzano, o Condomínio Portal das Artes oferece um apartamento bem planejado e confortável. Com um excelente custo-benefício, este imóvel é uma ótima oportunidade para quem busca segurança e praticidade. Está à venda por R$ 220.000,00.

    O imóvel conta com:

    - 2 dormitórios bem distribuídos.
    - 1 banheiro social moderno.
    - Sala de estar e jantar integradas.
    - Cozinha planejada para maior funcionalidade.
    - Área de serviço independente.
    - 1 vaga de garagem.

    O condomínio dispõe de portaria 24h, área de lazer e estacionamento interno. Sua localização é estratégica, com fácil acesso a mercados, escolas, farmácias e transporte público.

    Agende sua visita e garanta seu novo lar!`,
  },
  {
    id: 10,
    slug: "imovel-10",
    price: "R$ 212.000,00",
    size: 54,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 11 },
      (_, i) => `/homes/imovel-10/imovel-${i + 1}.jpeg`,
    ),
    address: "Vila Urupês Suzano",
    description: "Condomínio Portal das Artes",
    homeDescription: `Condomínio Portal das Artes - Vila Urupês, Suzano

    Com uma proposta de moradia acessível e funcional, o Condomínio Portal das Artes oferece um ambiente seguro e acolhedor para sua família. Este apartamento de 54m² é ideal para quem deseja um espaço bem distribuído e localizado. Está à venda por R$ 212.000,00.

    O imóvel conta com:

    - 2 dormitórios aconchegantes.
    - 1 banheiro social com ótimo acabamento.
    - Sala integrada, proporcionando amplitude ao ambiente.
    - Cozinha prática e planejada.
    - Área de serviço funcional.
    - 1 vaga de garagem.

    O condomínio oferece segurança 24h e está próximo a supermercados, farmácias e pontos de ônibus. Com excelente custo-benefício, este é o imóvel ideal para quem deseja morar bem sem abrir mão da conveniência.

    Agende uma visita e venha conhecer!`,
  },
  {
    id: 11,
    slug: "imovel-11",
    price: "R$ 222.000,00",
    size: 155,
    bedrooms: 0,
    bathrooms: 0,
    garage: 0,
    images: Array.from(
      { length: 4 },
      (_, i) => `/homes/imovel-11/imovel-${i + 1}.jpeg`,
    ),
    address: "Jardim Lincoln Suzano",
    description: "Terreno plano 5x31.",
    homeDescription: `Terreno Plano - Jardim Lincoln, Suzano

    Este terreno de 155m², com medidas de 5x31, oferece uma excelente oportunidade para quem deseja construir sua casa ou investir em um projeto imobiliário. Localizado no Jardim Lincoln, em Suzano, proporciona fácil acesso a comércios, escolas e transporte público.

    Principais características:

    - Área total de 155m² (5x31).
    - Terreno plano, pronto para construir.
    - Localização estratégica, em bairro residencial tranquilo.

    Não perca essa oportunidade! Entre em contato e agende uma visita.`,
},
  {
    id: 12,
    slug: "imovel-12",
    price: "R$ 480.000,00",
    size: "74,84",
    bedrooms: 2,
    bathrooms: 3,
    garage: 2,
    images: Array.from(
      { length: 12 },
      (_, i) => `/homes/imovel-12/imovel-${i + 1}.jpeg`,
    ),
    address: "Santa Helena - Poá",
    description: "Condomínio aldeia bianca IV.",
    homeDescription: `Condomínio Aldeia Bianca IV - Santa Helena, Poá

      Este lindo sobrado no Condomínio Aldeia Bianca IV oferece conforto e praticidade em um ambiente seguro e bem estruturado. Com 74,84m², conta com uma distribuição inteligente dos espaços e acabamento de qualidade. Está à venda por R$ 480.000,00.

      O imóvel conta com:

      - 2 dormitórios espaçosos.
      - Sala de jantar e sala de estar integradas.
      - Cozinha planejada, funcional e moderna.
      - 3 banheiros bem distribuídos.
      - Área de serviço independente.
      - 2 vagas de garagem.
      - Aceita financiamento.

      O condomínio proporciona um ambiente seguro e tranquilo, ideal para famílias que buscam qualidade de vida. 

      Agende uma visita e conheça este belo imóvel!`,
},
  {
    id: 13,
    slug: "imovel-13",
    price: "R$ 750.000,00",
    size: "3000",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    images: Array.from(
      { length: 34 },
      (_, i) => `/homes/imovel-13/imovel-${i + 1}.jpeg`,
    ),
    address: "Estância Paulista",
    description: "Chácara dos Fernandes!",
    homeDescription: `
    Chácara dos Fernandes - Estância Paulista

    Localizada na Rua Virgílio Gonçalves Capela, Estância Paulista, esta propriedade oferece uma área total de 3.000 m², com 500 m² de área construída. Avaliada em R$820.000,00, está sendo anunciada por R$750.000,00, apresentando uma excelente oportunidade de investimento.

    A chácara é composta por diversas edificações e estruturas de lazer:

    - **Casa Matriz**: Contendo 4 quartos, 3 banheiros, 2 cozinhas, uma ampla sala de estar, lavanderia e varanda.
    - **Casa do Lago**: Com 4 quartos, 2 banheiros, cozinha, sala e área com churrasqueira.
    - **Chalé**: Equipado com sala, cozinha, banheiro, quarto e lavanderia.
    - **Casa de Caseiro**: Possui sala, cozinha, banheiro, lavanderia e quarto, ideal para apoio na administração do imóvel.

    Entre as atrações de lazer, a propriedade conta com:
    - Piscina adulto e infantil
    - Quiosque com churrasqueira
    - Campo de futebol
    - Sala de jogos
    - Lago ornamental
    - Parquinho infantil
    - Bosque com árvores frutíferas
    - Área com forno e churrasqueira

    Além disso, a chácara oferece amplo estacionamento e está totalmente murada, com 54 metros de frente para a rua.

    Esta é uma excelente oportunidade para quem busca um refúgio tranquilo e bem estruturado, com diversas opções de lazer e conforto, em um ambiente totalmente privativo.
  `,
  },
  {
    id: 14,
    slug: "imovel-14",
    price: "R$ 1.800.000,00",
    size: "5565",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    images: Array.from(
      { length: 4 },
      (_, i) => `/homes/imovel-14/imovel-${i + 1}.jpeg`,
    ),
    address: "Altos de Suzano/Cidade Edson",
    description: "Chácara Altos de Suzano!",
    homeDescription: `
    Rua das Chácaras - Altos de Suzano / Cidade Edson
    
    Localizada na Rua das Chácaras, no Altos de Suzano, Cidade Edson, esta propriedade possui uma área total de 5.565 m², com 1.100 m² de área construída. Está à venda por R$1.800.000,00 e é uma excelente oportunidade para diversos tipos de investidores.
  
    A propriedade é totalmente murada, com 80 metros de frente, e possui diversas edificações:
  
    - 1 Casa de 140 m², composta por 6 quartos, 2 salas, 3 banheiros e 2 cozinhas.
    - Salão de Festas com 6 banheiros e cozinha industrial, ideal para grandes eventos.
    - Sala de Jogos com 2 banheiros e cozinha americana.
    - Área de Churrasqueira/Forno e infraestrutura anexa, pronta para uso.
    
    A propriedade também oferece um amplo espaço coberto, que pode ser utilizado para conferências, reuniões, locações para empresas, escolas, igrejas e eventos em geral, com capacidade para até 500 pessoas.
  
    Além disso, há outras áreas preparadas para construção de novas edificações.
  
    O imóvel oferece um amplo estacionamento com capacidade para até 80 vagas.
  
    Observação: Nosso entendimento é que a venda deste imóvel pode ser ampliada para clientes que:
    
    1. Queiram morar em uma chácara.
    2. Igrejas, empresas e escolas que desejam ter espaço próprio para entretenimento.
    3. Organizadores de eventos.
    4. Concorrentes.
    5. Empreendedores que queiram construir mais casas no local para locação ou condomínio.
    `,
  },
];
