import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 3)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const category = typeof content.category === 'string' ? content.category : 'Press Media'
  const published = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const media = Array.isArray(post.media) ? post.media : []
  const imageFromMedia = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const contentImages = Array.isArray((content as any).images) ? (content as any).images : []
  const featuredImage = imageFromMedia || contentImages.find((item: unknown) => typeof item === 'string') || '/freepik-assets/news-media-distribution.svg'
  const pageUrl = `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/updates/${post.slug}`

  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <section className="bg-[linear-gradient(130deg,#49243e_0%,#704264_62%,#bb8493_100%)] py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f1dde6]">{category}</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
          {post.summary ? <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#f0d7e1]">{post.summary}</p> : null}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[#f7e7ed]">
            <span>By {post.authorName || 'Editorial Desk'}</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start">
          <article className="overflow-hidden rounded-3xl border border-[#dcc1cb] bg-white shadow-[0_15px_42px_rgba(73,36,62,0.1)]">
            <div className="relative h-[260px] overflow-hidden sm:h-[420px]">
              <ContentImage src={featuredImage} alt={`${post.title} featured image`} fill className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-[#351d30] prose-p:text-[#4f3348] prose-li:text-[#4f3348]">
                <RichContent html={html} />
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#dcc3cd] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d637f]">Share release</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e7ee] text-[#704264] hover:bg-[#ecd3de]"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e7ee] text-[#704264] hover:bg-[#ecd3de]"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e7ee] text-[#704264] hover:bg-[#ecd3de]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#dcc3cd] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d637f]">More News</p>
              <div className="mt-4 space-y-3">
                {recent.map((item) => (
                  <Link key={item.id} href={`/updates/${item.slug}`} className="block border-b border-[#ecdce2] pb-3 text-sm leading-6 text-[#4b2a40] last:border-b-0 last:pb-0">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-3xl border border-[#dcc3cd] bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#391f33]">Related Articles</h2>
            <Link href="/updates" className="text-sm font-semibold text-[#704264] hover:text-[#49243e]">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recent.map((item) => (
              <Link key={item.id} href={`/updates/${item.slug}`} className="group overflow-hidden rounded-2xl border border-[#e3ced7] bg-[#fff9fb] transition hover:-translate-y-1 hover:border-[#bb8493]">
                <div className="relative h-36 overflow-hidden">
                  <ContentImage src="/freepik-assets/news-media-distribution.svg" alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8d637f]">Related</p>
                  <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-[#3f2036]">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
