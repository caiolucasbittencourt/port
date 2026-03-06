"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, formatDate } from "@/lib/data/blog-posts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />

      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="hover-card hover-card-interactive flex flex-col overflow-hidden rounded-xl sm:flex-row">
                  {/* Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-white/5 sm:aspect-square sm:w-48 sm:flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    {/* Title */}
                    <h2 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-gray-200">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime} de leitura</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
