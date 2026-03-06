"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologiesPage() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />

      <Header />

      <div className="mx-auto flex w-full max-w-4xl grow flex-col pt-24 pb-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-white">Coming Soon</h1>
            <p className="text-gray-400">
              This page is currently under construction.
            </p>
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
