import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import BlogContent from '../../components/blog/BlogContent'
import { CtaBanner } from '../../sections/SharedSections'
import { getAllBlogSlugs, getBlogBySlug } from '../../data/blogs'

export default function BlogDetailPage({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.image} />
        <link rel="canonical" href={`/blog/${blog.slug}`} />
      </Head>

      <div className="bg-[#f4f7fb] min-h-screen">
        {/* Hero */}
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 bg-[#002855]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00CFB8] transition-colors mb-8 text-sm"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {blog.title}
            </h1>
            {blog.date && (
              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <Calendar size={14} /> {blog.date}
              </p>
            )}
          </div>
        </section>

        {/* Featured Image */}
        <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <BlogContent blocks={blog.content} />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002855] text-white rounded-lg font-medium hover:bg-[#00CFB8] hover:text-[#002855] transition-colors"
              >
                <ArrowLeft size={16} /> Back to All Articles
              </Link>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const slugs = getAllBlogSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const blog = getBlogBySlug(params.slug)

  if (!blog) {
    return { notFound: true }
  }

  return {
    props: {
      blog: {
        slug: blog.slug,
        title: blog.title,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        date: blog.date,
        image: blog.image,
        imageAlt: blog.imageAlt,
        content: blog.content
      }
    }
  }
}
