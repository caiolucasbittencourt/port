"use client";

import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
  >("IDLE");

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
            email,
            _subject: "Nova inscrição - Portfólio Next.js",
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        setStatus("SUCCESS");
        setEmail("");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="col-span-12 hover-card rounded-xl p-8 mt-4 relative overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          Inscreva-se na minha newsletter
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all disabled:opacity-50"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "SUCCESS" || status === "LOADING"}
            />
          </div>

          <button
            type="submit"
            disabled={status !== "IDLE" && status !== "ERROR"}
            className="bg-white/5 text-white border border-white/10 font-medium rounded-lg px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/50 transition-all sm:w-auto w-full whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "LOADING" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
              </>
            ) : status === "SUCCESS" ? (
              "Inscrito!"
            ) : (
              "Inscrever-se"
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
