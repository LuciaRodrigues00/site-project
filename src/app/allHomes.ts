export const allHomes = [
  {
    id: 1,
    slug: "imovel-1",
    ref: "SO001",
    price: "R$ 2.300.000,00",
    size: 300,
    garage: 4,
    bedrooms: 4,
    bathrooms: 1,
    images: Array.from(
      { length: 27 },
      (_, i) => `/homes/imovel-1/imovel-${i + 1}.jpeg`,
    ),
    address: "Mogi das Cruzes - SP",
    description: "Condomínio Veredas",
    homeDescription: `

      Condomínio Veredas - Mogi das Cruzes

      - 4 dormitórios, sendo 4 suítes (1 master com closet e sacada)  
      - Sala ampla e bem iluminada  
      - Cozinha planejada  
      - Banheiro social  
      - Lavabo  
      - Área de serviço  
      - 4 vagas de garagem (2 descobertas)  

      Localizado no Condomínio Veredas, com segurança 24h e área de lazer completa.  

      Agende uma visita!
    `,
  },
  {
    id: 2,
    slug: "imovel-2",
    ref: "AP004",
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
          Condomínio Predilleto - Suzano 

      - 2 quartos aconchegantes, garantindo conforto e privacidade.
      - 1 banheiro moderno e bem distribuído.
      - Sala de estar integrada, proporcionando um ambiente amplo e funcional.
      - Cozinha compacta, ideal para otimização de espaço.
      - 1 vaga de garagem, trazendo segurança e comodidade.

      Agende uma visita e conheça de perto essa oportunidade!
    
    `,
  },
  {
    id: 3,
    slug: "imovel-3",
    ref: "AP008",
    price: "R$ 185.000,00",
    size: 48,
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

        Condomínio Predilleto - Mogi das Cruzes 

      - 2 quartos bem distribuídos.
      - 1 banheiro funcional com acabamento moderno.
      - Sala de estar integrada.
      - Cozinha prática e bem planejada.
      - 1 vaga de garagem.

      Agende sua visita!
    `,
  },
  {
    id: 4,
    slug: "imovel-4",
    ref: "AP002",
    price: "R$ 350.000,00",
    size: 92,
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

            Condomínio Bonini - Poá 

      - 3 quartos amplos e bem iluminados.
      - 2 banheiros com acabamentos modernos.
      - Sala espaçosa e aconchegante.
      - Cozinha funcional e bem distribuída.
      - 2 vagas de garagem.

      Agende sua visita e venha conhecer!
      `,
  },
  {
    id: 5,
    slug: "imovel-5",
    ref: "AP007",
    price: "R$ 200.000,00",
    size: 48,
    bedrooms: 2,
    bathrooms: 1,
    garage: 0,
    images: Array.from(
      { length: 15 },
      (_, i) => `/homes/imovel-5/imovel-${i + 1}.jpeg`,
    ),
    address: "Jardim Santa Tereza",
    description: "Condomínio Santa Tereza",
    homeDescription: `

          Condomínio Santa Tereza 

      - 2 quartos aconchegantes.
      - 1 banheiro funcional.
      - Sala integrada.
      - Cozinha compacta e bem planejada.
      - 1 vaga de garagem.

      Agende uma visita e conheça de perto essa oportunidade!`,
  },
  {
    id: 6,
    slug: "imovel-6",
    ref: "AP003",
    price: "R$ 780.000,00",
    size: 85,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 18 },
      (_, i) => `/homes/imovel-6/imovel-${i + 1}.jpeg`,
    ),
    address: "Mogi das Cruzes - SP",
    description: "Condomínio Green Valle",
    homeDescription: `

    Condomínio Green Valle - Mogi das Cruzes

    - 3 dormitórios, sendo um suíte.
    - 2 banheiro moderno e bem acabado.
    - Sala de estar ampla com sacada.
    - Cozinha.
    - 2 vagas de garagem, sendo uma coberta..

    Piscina, playground, salão de festas, academia, portaria 24h.
    Agende sua visita!`,
  },
  {
    id: 7,
    slug: "imovel-7",
    ref: "SO003",
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
    homeDescription: `

    Condomínio Jardim Europa - Mogi das Cruzes

    - 3 dormitórios amplos, sendo 1 suíte.
    - 2 banheiros bem distribuídos.
    - Sala de estar e jantar integradas.
    - Cozinha funcional com planejados.
    - Área de serviço independente.
    - 2 vagas de garagem.

    Não perca essa oportunidade! Agende sua visita.`,
  },
  {
    id: 8,
    slug: "imovel-8",
    ref: "AP001",
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
    homeDescription: `

    Condomínio My Helbor - Mogi das Cruzes

    - 2 dormitórios, sendo 1 suíte elegante.
    - 2 banheiros modernos e bem equipados.
    - Sala de estar e jantar integradas.
    - Cozinha planejada com ótimo aproveitamento de espaço.
    - Área de serviço independente.
    - 1 vaga de garagem.

    Agende sua visita e venha se encantar com este imóvel exclusivo!`,
  },
  {
    id: 9,
    slug: "imovel-9",
    ref: "AP005",
    price: "R$ 220.000,00",
    size: 54,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    images: Array.from(
      { length: 18 },
      (_, i) => `/homes/imovel-9/imovel-${i + 1}.jpeg`,
    ),
    address: "Vila Urupês - Suzano",
    description: "Condomínio Portal das Artes.",
    homeDescription: `

    Condomínio Portal das Artes - Suzano

    - 2 dormitórios bem distribuídos.
    - 1 banheiro social moderno.
    - Sala de estar e jantar integradas.
    - Cozinha planejada para maior funcionalidade.
    - Área de serviço independente.
    - 1 vaga de garagem.

    Agende sua visita e garanta seu novo lar!`,
  },
  {
    id: 10,
    slug: "imovel-10",
    ref: "AP006",
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
    homeDescription: `

    Condomínio Portal das Artes - Suzano

    - 2 dormitórios aconchegantes.
    - 1 banheiro social com ótimo acabamento.
    - Sala integrada, proporcionando amplitude ao ambiente.
    - Cozinha prática e planejada.
    - Área de serviço funcional.
    - 1 vaga de garagem.

    Agende uma visita e venha conhecer!`,
  },
  {
    id: 11,
    slug: "imovel-11",
    ref: "TE001",
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
    homeDescription: `
    Terreno Plano - Jardim Lincoln, Suzano

    - Área total de 155m² (5x31).
    - Terreno plano, pronto para construir.

    Não perca essa oportunidade! Entre em contato e agende uma visita.`,
  },
  {
    id: 12,
    slug: "imovel-12",
    ref: "SO002",
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
    homeDescription: `

    Condomínio aldeia bianca IV - Poá

      - 2 dormitórios espaçosos.
      - Sala de jantar e sala de estar integradas.
      - Cozinha planejada, funcional e moderna.
      - 3 banheiros bem distribuídos.
      - Área de serviço independente.
      - 2 vagas de garagem.
      - Aceita financiamento.

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
    ref: "CH002",
    images: Array.from(
      { length: 34 },
      (_, i) => `/homes/imovel-13/imovel-${i + 1}.jpeg`,
    ),
    address: "Estância Paulista",
    description: "Chácara dos Fernandes!",
    homeDescription: `
    Chácara dos Fernandes - Estância Paulista Suzano

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
  `,
  },
  {
    id: 14,
    slug: "imovel-14",
    ref: "CH001",
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
    `,
  },
];
