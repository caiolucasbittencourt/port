// Blog post type
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
}

// Sample blog posts
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "de-programador-a-tony-stark",
    title: "O medo de ser vibe coder + a vontade de ser o Tony Stark",
    description:
      "A crise de usar IA pra tudo e não saber se tá evoluindo ou ficando dependente",
    image: "/blog/ironman.gif",
    date: "2026-03-05",
    author: "Caio Bittencourt",
    readTime: "5 min",
    tags: ["IA", "Carreira", "Opinião"],
    content: `
## Eu uso IA pra tudo e tô com medo

Eu uso IA pra praticamente tudo no meu dia a dia e não sei se isso me torna mais produtivo ou só dependente

O que me fez pensar sobre isso foi um post do Akita (<a href="https://akitaonrails.com/2026/03/05/37-dias-de-imers%C3%A3o-em-vibe-coding-conclus%C3%A3o-quanto-a-modelos-de-neg%C3%B3cio/" target="_blank">clica aqui se quiser ler</a>). Até ele que parecia ser totalmente contra o uso de IA (pelo menos era essa a impressão que eu tinha dele) agora tá usando pra tudo

Então se até ele cedeu quem sou eu pra resistir né

A ideia do "vibe coding" é que você não precisa mais realmente programar, você só descreve o que quer e a IA faz. Parece libertador na teoria mas na prática às vezes me sinto uma fraude

### Quando funciona é tipo mágica

Eu penso numa feature, descrevo pro Copilot e o código aparece. Ajusto aqui, refino ali e em 30 minutos tá pronto algo que levaria meio dia. Me sinto o Homem de Ferro comandando o J.A.R.V.I.S

Sobra tempo pra eu pensar na arquitetura, na experiência do usuário e no que realmente importa. Pelo menos é o que eu digo pra mim mesmo

### E se eu virar inútil sem a IA?

Eu ainda sei programar de verdade? Se tirarem a IA de mim eu consigo entregar?

Às vezes pego um código que a IA gerou e percebo que não entendi metade do que tá ali. Funciona mas eu não saberia explicar cada linha

Será que eu tô aprendendo ou só terceirizando meu cérebro?

### No fim das contas

A IA é uma ferramenta absurda e não usar seria burrice. Mas confiar cegamente também é

Por enquanto continuo usando. Continuo me sentindo produtivo. Continuo com a síndrome do impostor gritando na minha cabeça

Talvez daqui uns anos eu leia isso e pense "que dramático" ou talvez pense "eu avisei". Não sei qual prefiro
    `,
  },
  {
    slug: "ads-ou-engenharia-de-software",
    title: "ADS || Engenharia de Software?",
    description: `Confissões de quem tá no meio do curso e bateu a crise existencial de querer ser "engenheiro" só porque soa mais chique`,
    image: "/blog/engenheiro.jpg",
    date: "2026-03-01",
    author: "Caio Bittencourt",
    readTime: "4 min",
    tags: ["Carreira", "Faculdade", "Opinião"],
    content: `
## Ser engenheiro (só pelo título)

Eu tô no 3º semestre de Análise e Desenvolvimento de Sistemas. Metade do curso. Mas e se eu mudasse pra Engenharia de Software?

Por quê? Porque "Engenheiro de Software" soa mais chique. É isso. Essa é a razão. Patético? Completamente

### Por que eu quero isso de verdade

Vamos ser sinceros sobre os motivos reais dessa crise

- **O título** "Sou engenheiro" tem um peso diferente de "Sou tecnólogo". Não deveria ter mas tem
- **O LinkedIn** Engenheiro de Software parece mais impressionante no perfil. Eu sei que é vaidade mas também sei que recrutador olha essas coisas
- **A dúvida** Será que eu tô me limitando com um tecnólogo? Será que portas vão se fechar?

### Mas aí eu penso melhor

Mas aí eu paro pra pensar

- Já tô na metade de ADS. Trocar agora significa basicamente recomeçar
- O que eu faço no dia a dia não muda. Código é código. React não liga pro meu diploma
- Engenharia são 5 anos. ADS são 2,5. Tempo é dinheiro literalmente

Na prática o mercado de tech se importa mais com o que você sabe fazer do que com o nome do seu curso. Pelo menos é o que dizem

### Ego ou carreira?

Acho que essa crise é mais sobre ego do que sobre carreira de verdade. Eu quero o título bonito ou eu quero ser um bom desenvolvedor? Porque uma coisa não depende da outra

### O plano B que me conforta

Uma ideia que me conforta é fazer uma pós em Engenharia de Software depois. Tipo termino ADS rápido e aí faço uma especialização pra "compensar"

### Provavelmente vou continuar ADS

Se eu for honesto comigo mesmo sei que vou continuar ADS. Terminar logo e deixar meu trabalho falar por mim
    `,
  },
  {
    slug: "por-que-esse-blog-existe",
    title: "Por que esse blog existe (spoiler: não é pra você)",
    description:
      "Isso aqui é mais um diário pessoal do que um blog de verdade. Não espero que ninguém leia",
    image: "/blog/eminem.gif",
    date: "2026-02-25",
    author: "Caio Bittencourt",
    readTime: "3 min",
    tags: ["Pessoal", "Meta", "Introdução"],
    content: `
## May i have your attention, please?

Se você chegou até aqui, primeiro por quê? Não era pra ninguém tá lendo isso

Esse blog existe por um motivo bem egoísta. Eu precisava de um lugar pra organizar meus pensamentos sobre tecnologia e ao invés de escrever num bloco de notas que eu ia perder decidi colocar num site. Pelo menos assim eu pratico fazer deploy

### Isso aqui não é tutorial

Não vou fingir que isso é um blog profissional com conteúdo educacional de qualidade. Tem MUITO material melhor por aí se você quer aprender algo

O que você vai encontrar aqui
- Opiniões que provavelmente vão mudar em 6 meses
- Reflexões sobre ferramentas e tecnologias que eu uso
- Celebrações de pequenas vitórias que só fazem sentido pra mim

### Se é diário por que não deixar privado?

"Se é um diário, por que não deixar privado?"

Honestamente? Porque colocar as coisas em público me obriga a pensar melhor antes de escrever. Vai que eu leio isso daqui 5 anos e dou risada de como eu era burro (provável de acontecer)

### Você não precisa concordar comigo

Você não precisa concordar com nada que eu escrevo aqui. Não precisa gostar. Na real não precisa nem ler. Isso aqui é mais pra mim do que pra qualquer outra pessoa
    `,
  },
];

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post) => post.slug === slug);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};
