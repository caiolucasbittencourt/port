"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { FORM_CONFIG } from "@/lib/constants";
import type { FormStatus } from "@/types";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("IDLE");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("LOADING");

    try {
      const response = await fetch(FORM_CONFIG.endpoint, {
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
      });

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="hover-card relative col-span-12 mt-4 overflow-hidden rounded-xl p-8"
    >
      <div className="relative z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              placeholder="Inscreva-se na minha newsletter"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-white focus:ring-1 focus:ring-white focus:outline-none disabled:opacity-50"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "SUCCESS" || status === "LOADING"}
            />
          </div>

          <button
            type="submit"
            disabled={status !== "IDLE" && status !== "ERROR"}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium whitespace-nowrap text-white transition-all hover:border-white/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "LOADING" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
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
