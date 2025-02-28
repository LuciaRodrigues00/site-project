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
    homeDescription:
      "Apartamento espaçoso com 5 quartos e 1 banheiro, ideal para famílias grandes. Localizado em um condomínio de alto padrão, oferece segurança e conforto, além de 4 vagas de garagem e fácil acesso a comércios e serviços. Agende uma visita!",
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
    homeDescription:
      "Apartamento compacto e funcional, perfeito para casais ou pequenas famílias. Conta com 2 quartos, 1 banheiro e 1 vaga de garagem. Localizado em condomínio seguro e bem estruturado, próximo a transporte público, escolas e comércios. Ótima oportunidade!",
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
    homeDescription:
      "Apartamento aconchegante com 2 quartos e 1 banheiro, localizado em um condomínio bem estruturado. Perfeito para quem busca praticidade e um bom custo-benefício. O imóvel conta com 1 vaga de garagem e proximidade a comércios locais e transporte público.",
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
    homeDescription:
      "Casa ampla com 3 quartos e 2 banheiros, situada em um condomínio seguro e bem localizado. Ideal para famílias que buscam conforto e praticidade, com acesso fácil a transporte público e comércios. Ótima oportunidade!",
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
    homeDescription:
      "Apartamento funcional com 2 quartos e 1 banheiro. Excelente opção para quem busca um imóvel bem localizado e com preço acessível. Agende uma visita para conhecer mais detalhes!",
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
    homeDescription:
      "Apartamento moderno com 2 quartos, 1 banheiro e 1 vaga de garagem. Conta com infraestrutura completa e segurança 24h. Excelente localização, próximo a escolas, comércios e transporte público. Agende sua visita!",
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
    homeDescription:
      "Casa espaçosa com 3 quartos, 2 banheiros e 2 vagas de garagem. Localizada em condomínio fechado, com área de lazer e segurança 24h. Ideal para famílias que buscam conforto e praticidade. Não perca essa oportunidade!",
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
    homeDescription:
      "2 Dormitórios sendo uma suíte\nSala de jantar\nSala de estar\nCozinha planejada\nBanheiro social\nÁrea de serviço\n1 vaga de garagem\nAceita financiamento.\n\nVamos agendar uma visita!",
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
    homeDescription:
      "2 Dormitórios\nSala de jantar\nSala de estar\nCozinha planejada\nBanheiro social\nÁrea de serviço\n1 vaga de garagem\nAceita financiamento.\n\nVamos agendar uma visita!",
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
    homeDescription:
      "2 Dormitórios\nSala de jantar\nSala de estar\nCozinha planejada\nBanheiro social\nÁrea de serviço\n1 vaga de garagem\nAceita financiamento.\n\nVamos agendar uma visita!",
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
    homeDescription:
      "Terreno plano de 155 m² no Jardim Lincoln, Suzano. Com medidas de 5x31, esse terreno oferece amplo espaço para construção, ideal para quem busca investir ou construir seu lar.\n\nVamos agendar uma visita!",
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
    homeDescription:
      "2 Dormitórios\nSala de jantar\nSala de estar\nCozinha planejada\nBanheiro social\nÁrea de serviço\n2 vagas de garagem\nAceita financiamento.\n\nVamos agendar uma visita!",
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
    address: "Chácara dos Fernandes - Estância Paulista",
    description: "Chácara com diversas casas, lazer e muito mais!",
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
    description: "Uma das melhores da região!",
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
