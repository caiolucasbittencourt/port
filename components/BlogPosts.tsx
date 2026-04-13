"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, formatDate } from "@/lib/data/blog-posts";

const HOME_POSTS = [BLOG_POSTS[0], BLOG_POSTS[1], BLOG_POSTS[2]];

export default function BlogPosts() {
  return (
    <section className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {HOME_POSTS.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div className="hover-card hover-card-interactive flex h-full flex-col overflow-hidden rounded-xl">
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-gray-200">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-400">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </section>
  );
}
