"use client";

export default function Hero() {
  return (
    <section className="hover-card rounded-xl p-8 text-justify">
      <p className="text-lg leading-relaxed font-light text-gray-500 md:text-xl">
        <span className="font-medium text-white">Desenvolvedor Full-Stack</span>{" "}
        e graduando em{" "}
        <span className="font-medium text-white">
          Análise e Desenvolvimento de Sistemas
        </span>
        , capacitado para atuar em todas as etapas de um projeto de software.
        <br />
        <br />
        Focado no ecossistema{" "}
        <span className="font-medium text-white">
          JavaScript/TypeScript (React, Node.js)
        </span>
        , construo aplicações web de ponta a ponta: desde a criação de
        interfaces modernas para o usuário até a estruturação de servidores,
        APIs e bancos de dados (SQL e NoSQL).
      </p>
    </section>
  );
}
