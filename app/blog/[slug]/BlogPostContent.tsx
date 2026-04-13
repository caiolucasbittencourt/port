"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost, formatDate } from "@/lib/data/blog-posts";

interface Props {
  post: BlogPost;
}

export default function BlogPostContent({ post }: Props) {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />

      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>
        </motion.div>

        {/* Article Card */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hover-card rounded-xl p-6 md:p-8"
        >
          {/* Header */}
          <header className="mb-8 border-b border-white/10 pb-8">
            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
          />
        </motion.article>

        <Footer />
      </div>

      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .blog-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #e5e5e5;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .blog-content p {
          color: #a1a1aa;
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .blog-content ul,
        .blog-content ol {
          color: #a1a1aa;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
        }

        .blog-content pre {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .blog-content code {
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
        }

        .blog-content p code {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          color: #e5e5e5;
        }

        .blog-content strong {
          color: #fff;
          font-weight: 600;
        }

        .blog-content a {
          color: #60a5fa;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .blog-content a:hover {
          color: #93c5fd;
        }
      `}</style>
    </main>
  );
}

// Simple markdown parser
function parseMarkdown(content: string): string {
  return (
    content
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
        return `<pre><code class="language-${lang || ""}">${escapeHtml(code.trim())}</code></pre>`;
      })
      // Inline code
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // Headers
      .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      // Bold
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      // Lists
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)\n(?=<li>)/g, "$1")
      .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
      .replace(/<\/ul>\n<ul>/g, "")
      // Numbered lists
      .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
      // Paragraphs
      .replace(/^(?!<[huplo]|$)(.+)$/gm, "<p>$1</p>")
      // Clean up empty paragraphs
      .replace(/<p><\/p>/g, "")
      .replace(/<p>\s*<\/p>/g, "")
  );
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
