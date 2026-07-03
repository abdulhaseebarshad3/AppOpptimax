'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { CtaBanner } from '../sections/SharedSections'
import { getAllBlogMeta } from '../data/blogs/meta'

const posts = getAllBlogMeta()

function ReadMoreLabel({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${className}`}>
      Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </span>
  )
}

const BlogPage = () => {
  const featured = posts[0]
  const sidePosts = posts.slice(1, 3)
  const gridPosts = posts.slice(3)

  return (
    <>
      <Head>
        <title>ASO Blog | Insights for App Growth Teams | App Optimax</title>
        <meta
          name="description"
          content="Practical ASO playbooks on visibility, conversion, retention, localization, and AI-powered app store optimization from App Optimax."
        />
      </Head>

      <div className="bg-[#f4f7fb] min-h-screen">
        {/* Hero Banner */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[#002855]" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#00CFB8]/20 border border-[#00CFB8]/40 text-white text-sm mb-4">
              ASO Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Insights for app growth teams</h1>
            <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
              Practical playbooks on visibility, conversion, and retention for modern ASO execution.
            </p>
          </div>
        </section>

        {/* Magazine Grid */}
        <section className="py-24 bg-[#f4f7fb]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <span className="text-sm font-semibold text-[#00CFB8] uppercase tracking-wider">
                  Insights & Guides
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mt-2">Latest ASO Articles</h2>
              </div>
            </div>

            {/* Top Row: Featured + Side Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Post */}
              <motion.div
                className="lg:col-span-2 lg:row-span-2 relative group rounded-2xl overflow-hidden h-[500px] lg:h-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/blog/${featured.slug}`} className="block h-full">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt || featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-gray-200 mb-4 hidden md:block line-clamp-3">{featured.excerpt}</p>
                    <ReadMoreLabel className="text-[#00CFB8] group-hover:text-white" />
                  </div>
                </Link>
              </motion.div>

              {/* Right Side — 2 stacked cards */}
              <div className="flex flex-col gap-6">
                {sidePosts.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    className="relative group rounded-2xl overflow-hidden h-[240px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (idx + 1), duration: 0.5 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 z-10">
                        <h3 className="text-lg font-bold text-white leading-tight mb-2">{post.title}</h3>
                        <p className="text-gray-200 text-sm line-clamp-2 mb-3 hidden sm:block">{post.excerpt}</p>
                        <ReadMoreLabel className="text-[#00CFB8] group-hover:text-white" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {gridPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden group border border-gray-100 hover:border-[#00CFB8]/30 transition-colors shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#002855] mb-2 leading-tight">{post.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <ReadMoreLabel className="text-[#002855] group-hover:text-[#00CFB8]" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  )
}

export default BlogPage
