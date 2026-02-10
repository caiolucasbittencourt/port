"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("LOADING");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/caiolucasbittencourt@hotmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Novo contato de: ${formData.name} - ${formData.subject}`,
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  const inputStyle =
    "w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="col-span-12 hover-card rounded-xl p-6 md:p-8 mt-4 relative overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          Vamos falar sobre seu próximo projeto
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* nome */}
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyle}
            />

            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>

          {/* assunto */}
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputStyle}
          />

          {/* mensagem */}
          <textarea
            name="message"
            placeholder="Sua mensagem..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputStyle} resize-none`}
          />

          {/* botão */}
          <button
            type="submit"
            disabled={status === "LOADING" || status === "SUCCESS"}
            className="bg-white/5 text-white border border-white/10 font-medium rounded-lg px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all w-full md:w-auto self-end disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "LOADING" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
              </>
            ) : status === "SUCCESS" ? (
              <>Mensagem enviada!</>
            ) : (
              <>Enviar mensagem</>
            )}
          </button>

          {/* feedback */}
          {/*           {status === "SUCCESS" && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-green-400 text-xs text-center font-medium mt-2 bg-green-500/10 p-2 rounded border border-green-500/20"
            >
              Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.
            </motion.p>
          )} */}

          {status === "ERROR" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs text-center font-medium mt-2 bg-red-500/10 p-2 rounded border border-red-500/20"
            >
              Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde.
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
