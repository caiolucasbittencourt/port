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
    slug: "o-peixe-babel-definitivo-front-e-back-falando-o-mesmo-idioma",
    title: "BABEL FISH",
    description:
      "Como a unificação da stack elimina o atrito e reduz o custo cognitivo",
    image: "/blog/babelfish.gif",
    date: "2026-04-22",
    author: "Caio Bittencourt",
    readTime: "6 min",
    tags: ["JavaScript", "TypeScript", "Node.js", "Arquitetura", "Opinião"],
    content: `
## O que é o babel fish (versão dev)?

No Guia do Mochileiro das Galáxias, o babel fish é um bicho que traduz qualquer idioma em tempo real

Pra mim, usar JavaScript e TypeScript no front e no back é isso. Não é sobre modinha. É sobre não passar o dia inteiro traduzindo pensamento

### Stack misturada

Eu já trabalhei no esquema front em uma linguagem e back em outra. Funciona, claro. Só que cansa mais do que parece

Quando eu engrenava no jeito de pensar de um lado, precisava trocar o chip pro outro. No fim do dia eu tava morto

E o pior nem era escrever código

- Validação repetida

- Tipo com nome diferente em cada lado

- Bug que "não é do front" e também "não é do back"

Esse empurra-empurra de bug me chateia num nível...

### Quando tudo é JS/TS

Depois que padronizei em JS/TS, algumas coisas ficaram menos dramáticas

- **Mesmo modelo mental** Função, objeto, async, promise. A base é a mesma em qualquer camada
- **Tipos de ponta a ponta** Com TypeScript, dá pra compartilhar contratos e reduzir aquele clássico "funciona aqui, quebra ali"
- **Código compartilhado de verdade** Schemas, validações, utilitários e regras podem viver em um lugar só
- **Onboarding mais rápido** Menos contexto pra aprender, mais tempo construindo coisa útil

No fim, sua energia vai pra arquitetura, produto e experiência

### A toalha do Node.js

No Guia, a toalha é considerada "o item mais indispensável para um viajante interestelar"

No meu mundo, Node.js virou isso

Precisou subir API rápido? Node

Precisou integrar com o front? Node

Preciso manter ritmo com time pequeno? Node com TypeScript normalmente resolve sem muita firula

### "Então qualquer outra linguagem é ruim?"

Não, claro que não

Tem cenário em que Go, C#, Java, Python e várias outras opções fazem mais sentido

Não tô tentando converter ninguém. Só defendendo uma coisa simples, se você pode reduzir custo cognitivo, reduza

No dia a dia, o que quebra time nem sempre é performance. Muitas vezes é atrito

### IN SHORT

Front e back no mesmo idioma não te transforma em gênio

Mas corta ruído, reduz retrabalho e deixa mais energia pra decidir o que realmente importa

No fim era só isso

Menos tradução, mais entrega
    `,
  },
  {
    slug: "de-programador-a-tony-stark",
    title: "Vibe Code + Tony Stark",
    description:
      "A crise de usar IA pra tudo e não saber se tá evoluindo ou ficando dependente",
    image: "/blog/ironman.gif",
    date: "2026-03-05",
    author: "Caio Bittencourt",
    readTime: "5 min",
    tags: ["IA", "Carreira", "Opinião"],
    content: `
## Eu uso IA pra tudo e tô com medo

O que me fez pensar sobre isso foi um post do Akita (<a href="https://akitaonrails.com/2026/03/05/37-dias-de-imers%C3%A3o-em-vibe-coding-conclus%C3%A3o-quanto-a-modelos-de-neg%C3%B3cio/" target="_blank">clica aqui se quiser ler</a>). Até ele que parecia ser totalmente contra o uso de IA (pelo menos era essa a impressão que eu tinha dele) agora tá usando pra tudo

Então se até ele cedeu quem sou eu na fila do pão

A ideia do "vibe coding" é que você não precisa mais programar de verdade, você só diz o que quer (prompt) e a IA faz. Parece libertador na teoria mas na prática às vezes me sinto uma fraude

### Quando funciona é tipo mágica

Eu penso na feature, descrevo pra IA e o código aparece. Ajusto aqui e ali e em meia hora tá pronto algo que levaria 1 dia inteiro. Me sinto o Homem de Ferro com o J.A.R.V.I.S

Sobra tempo pra eu pensar na arquitetura, na UX e no que realmente importa. Pelo menos é o que eu digo pra mim mesmo

### Sou inútil sem IA?

Eu ainda sei programar de verdade? Se tirarem a IA de mim eu consigo entregar?

Às vezes pego um código que a IA gerou e percebo que não entendi metade do que tá ali. Funciona mas eu não saberia explicar cada linha

Será que eu tô aprendendo ou só terceirizando meu cérebro?

### No fim das contas

Ignorar IA hoje é burrice. Mas confiar cegamente é roleta russa

Por enquanto continuo usando. Continuo me sentindo produtivo. Continuo com a síndrome do impostor

Talvez daqui uns anos eu leia isso e pense "que drama" ou talvez pense "eu avisei". Não sei qual prefiro
    `,
  },
  {
    slug: "ads-ou-engenharia-de-software",
    title: "ADS || Engenharia de Software?",
    description: `Confissões de quem tá no meio do curso de ADS e bateu a crise existencial de querer ser "engenheiro"`,
    image: "/blog/engenheiro.jpg",
    date: "2026-03-01",
    author: "Caio Bittencourt",
    readTime: "4 min",
    tags: ["Carreira", "Faculdade", "Opinião"],
    content: `
## Ser engenheiro (só pelo título)

Eu tô no 3º semestre de Análise e Desenvolvimento de Sistemas, metade do curso. Mas e se eu transferisse pra Engenharia de Software?

Por quê? Porque "Engenheiro de Software" soa mais chique. É isso. Essa é a razão. Patético né?

### Por que eu quero isso de verdade

Vamos ser sinceros sobre os motivos reais dessa crise

- **O título** "Sou engenheiro" tem um peso diferente de "Sou tecnólogo". Talvez não devesse ter mas tem
- **O LinkedIn** Engenheiro de Software soa mais foda no perfil. Eu sei que é vaidade mas também sei que recrutador olha essas coisas
- **A dúvida** Será que eu tô me limitando com um tecnólogo? Será que portas vão se fechar?

### Mas aí eu paro pra pensar

- Já tô na metade de ADS. Trocar agora significa basicamente recomeçar
- O que eu faço no dia a dia não muda. Código é código e o React não liga pro meu diploma
- Engenharia são 5 anos e ADS são 2,5. Tempo é dinheiro literalmente

Na prática o mercado de tech se importa mais com o que você sabe fazer do que com o nome do seu curso. Pelo menos é o que dizem

### Ego ou carreira?

Provavelmente essa crise é mais sobre ego do que sobre carreira. Eu quero o título bonito ou eu quero ser um bom desenvolvedor? Porque uma coisa não depende da outra

### O plano B que me conforta

Uma ideia que me conforta é fazer uma pós em Engenharia de Software depois. Tipo termino ADS rápido e faço uma especialização pra "compensar"

### Provavelmente vou continuar ADS

Se eu for honesto comigo mesmo sei que vou continuar ADS, terminar logo e deixar meu trabalho falar por mim
    `,
  },
  {
    slug: "por-que-esse-blog-existe",
    title: "Por que esse blog existe",
    description: "Isso aqui é mais um diário pessoal do que um blog de verdade",
    image: "/blog/eminem.gif",
    date: "2026-02-25",
    author: "Caio Bittencourt",
    readTime: "3 min",
    tags: ["Pessoal", "Meta", "Introdução"],
    content: `
## May i have your attention, please?

Esse blog existe por um motivo bem egoísta. Eu precisava de um lugar pra organizar meus pensamentos sobre tecnologia e ao invés de escrever num bloco de notas que eu ia perder decidi colocar num site. Pelo menos assim eu pratico fazer deploy

### Isso aqui não é tutorial

Não vou fingir que isso é um blog profissional com conteúdo educacional de qualidade, tem MUITO material melhor por aí se você quer aprender algo

O que você vai encontrar aqui
- Opiniões que provavelmente vão mudar em 6 meses
- Reflexões sobre ferramentas e tecnologias que eu uso
- Celebrações de pequenas vitórias que só fazem sentido pra mim

### Se é diário por que não deixar privado?

Honestamente? Porque colocar as coisas em público me obriga a pensar melhor antes de escrever. Vai que eu leio isso daqui 5 anos e dou risada de como eu era burro (muito provável)

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
