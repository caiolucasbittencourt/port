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
      "Stack única reduz atrito, alinha contratos e corta ruído operacional",
    image: "/blog/babelfish.gif",
    date: "2026-04-22",
    author: "Caio Bittencourt",
    readTime: "6 min",
    tags: ["JavaScript", "TypeScript", "Node.js", "Arquitetura", "Opinião"],
    content: `
## Babel fish para devs

No Guia do Mochileiro das Galáxias, o babel fish traduz qualquer idioma em tempo real. Em engenharia, JavaScript/TypeScript no front e no back elimina tradução mental. É redução de ruído.

### Stack fragmentada

Já trabalhei com front em uma linguagem e back em outra. Funciona, mas cansa.

Quando o cérebro finalmente entra no modo do front, você troca para o back e perde contexto.

O código vira detalhe.

- Validação duplicada em camadas diferentes

- Tipos com nomes incompatíveis para a mesma entidade

- Bug sem dono, empurrado entre times

### JavaScript/TypeScript ponta a ponta

Depois que padronizei em JavaScript/TypeScript, o drama acabou.

- **Mesmo modelo mental** Função, objeto, async, promise. Um vocabulário só.
- **Tipos ponta a ponta** Contratos compartilhados reduzem divergência e retrabalho.
- **Código reutilizável de verdade** Schema, validação, utilitário e regra moram no mesmo lugar.
- **Onboarding mais rápido** Menos contexto, mais entrega.

A energia vai para arquitetura, produto e experiência. Não para tradução.

### Node.js como ferramenta base

No Guia, a toalha é o item indispensável. Para mim, isso virou o Node.js.

Precisa subir API rápido? Node.

Precisa integrar com o front? Node.

Time pequeno, prazo curto, pouca margem de erro? Node com TypeScript.

### "Outras linguagens são piores?"

Não. Existem cenários em que GO, C#, Java, Python e outras opções são melhores. Não é cruzada religiosa, é pragmatismo: se você pode reduzir custo cognitivo, reduza.

No cotidiano, o que mata time raramente é performance. É atrito.

Front e back no mesmo idioma não te transforma em gênio. Só corta ruído, reduz retrabalho e libera tempo mental. Menos tradução, mais entrega.
    `,
  },
  {
    slug: "de-programador-a-tony-stark",
    title: "A Síndrome de Tony Stark",
    description: "IA acelera entrega, mas fragiliza entendimento",
    image: "/blog/ironman.gif",
    date: "2026-03-05",
    author: "Caio Bittencourt",
    readTime: "5 min",
    tags: ["IA", "Carreira", "Opinião"],
    content: `
## Eu uso IA pra tudo

O gatilho foi um post do Akita (<a href="https://akitaonrails.com/2026/03/05/37-dias-de-imers%C3%A3o-em-vibe-coding-conclus%C3%A3o-quanto-a-modelos-de-neg%C3%B3cio/" target="_blank">37 dias de Imersão em Vibe Coding: Conclusão quanto a Modelos de Negócio</a>).

A promessa do "vibe coding" é simples: você descreve e a IA entrega. Parece liberdade. Na prática, às vezes parece terceirização do próprio cérebro.

### Quando funciona parece trapaça

Eu descrevo a feature e o código aparece. Ajusto um detalhe e em meia hora tenho algo que levaria um dia. É o J.A.R.V.I.S em modo utilitário.

Sobra tempo para arquitetura, UX e decisão.

### Sem IA

Eu ainda sei programar sem IA?

Às vezes pego um trecho que ela escreveu e percebo que não sei explicar cada linha. Funciona, mas eu não domino. Isso é produtividade ou risco operacional?

Ignorar IA hoje é loucura. Depender cegamente é suicídio técnico.

Continuo usando. Continuo produzindo. Continuo desconfiando.

Talvez eu releia isso daqui a alguns anos e ache drama.
    `,
  },
  {
    slug: "ads-ou-engenharia-de-software",
    title: "ADS x Engenharia",
    description: "Ego pesa e mercado cobra execução",
    image: "/blog/engenheiro.jpg",
    date: "2026-03-01",
    author: "Caio Bittencourt",
    readTime: "4 min",
    tags: ["Carreira", "Faculdade", "Opinião"],
    content: `
## Ser engenheiro

Estou no 3º semestre de Análise e Desenvolvimento de Sistemas. E a ideia de migrar para Engenharia de Software aparece. O motivo é simples e feio, o título soa melhor.

### Motivos reais

Vamos ser diretos sobre os motivos reais dessa crise.

- **O título** "Engenheiro" parece mais sério do que "tecnólogo". Vaidade explícita.
- **O LinkedIn** Nome forte chama mais clique, e recrutador lê isso.
- **A dúvida** Será que um tecnólogo fecha portas?

### Contra-argumentos

- Já estou no meio de ADS. Trocar agora é recomeçar.
- O meu trabalho diário não muda. Código é código e o React não lê diploma.
- Engenharia são 5 anos e ADS 2,5. Tempo e dinheiro são finitos.

Na prática, o mercado cobra entrega. Nome de curso é nota de rodapé.

### Ego ou estratégia?

Essa crise é mais ego do que estratégia. Eu quero o título bonito ou quero ser um bom desenvolvedor? Uma coisa não garante a outra.

### Plano B

Terminar ADS e depois fazer uma pós em Engenharia de Software. Credencial extra.

### Decisão provável

Se eu for honesto comigo mesmo, vou terminar ADS e deixar meu trabalho falar por mim.
    `,
  },
  {
    slug: "por-que-esse-blog-existe",
    title: "Este blog é um caderno público",
    description: "Diário técnico, sem promessa de didática",
    image: "/blog/eminem.gif",
    date: "2026-02-25",
    author: "Caio Bittencourt",
    readTime: "3 min",
    tags: ["Pessoal", "Meta", "Introdução"],
    content: `
## Atenção, sem desculpas

Este blog existe com o propósito egoísta de organizar meus pensamentos. Em vez de escrever num bloco de notas e arriscar perder tudo, preferi publicar e treinar deploy.

### Não é tutorial

Não finjo que isso é conteúdo educacional. Se você quer aprender, há material muito melhor por aí.

O que aparece aqui
- Opiniões que mudam rápido
- Reflexões sobre ferramentas que eu uso
- Pequenas vitórias que só fazem sentido pra mim

### "Se é só pra você, por que publicar?"

Porque publicar me força a pensar antes de escrever. Eu vou rir de muita coisa daqui a alguns anos.

### Discordar não muda nada

Não precisa concordar. Não precisa gostar. Não precisa ler. Isso aqui é mais pra mim do que pra você.
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
