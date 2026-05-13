import Link from 'next/link'
import { Filter, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null, size = 160) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > size ? value.slice(0, size - 3).trimEnd() + '...' : value
}

function imageFromPost(post: any) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item: any) => typeof item?.url === 'string' && item.url)?.url
  const contentImages = post?.content && typeof post.content === 'object' ? (post.content as any).images : []
  const fallback = Array.isArray(contentImages) ? contentImages.find((item: unknown) => typeof item === 'string') : null
  return mediaUrl || fallback || '/freepik-assets/news-media-distribution.svg'
}

export async function TaskListPageOverride({ category }: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const normalized = category ? normalizeCategory(category) : 'all'
  const filtered =
    normalized === 'all'
      ? posts
      : posts.filter((post) => {
          const raw = typeof (post.content as any)?.category === 'string' ? (post.content as any).category : ''
          return normalizeCategory(raw) === normalized
        })

  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="rounded-[2rem] bg-[linear-gradient(130deg,#49243e_0%,#704264_62%,#bb8493_100%)] p-7 text-white shadow-[0_20px_55px_rgba(73,36,62,0.24)] sm:p-9">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            <Filter className="h-3.5 w-3.5" />
            Press media listing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Browse Latest News Releases</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#f2dce5]">
            Scan published announcements, filter by category, and open complete stories in a clean editorial reading flow.
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <form action="/updates" className="grid gap-3 sm:grid-cols-2 md:col-span-2">
              <label className="rounded-xl border border-white/30 bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5e5eb]">
                Category
                <select
                  name="category"
                  defaultValue={normalized}
                  className="mt-2 h-10 w-full rounded-lg border border-white/30 bg-[#3f2038] px-3 text-sm text-white"
                >
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="rounded-xl border border-white/30 bg-white/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5e5eb]">
                Date
                <input type="date" name="date" className="mt-2 h-10 w-full rounded-lg border border-white/30 bg-[#3f2038] px-3 text-sm text-white" />
              </label>
              <button type="submit" className="h-12 rounded-xl bg-white px-5 text-sm font-semibold text-[#49243e] transition hover:bg-[#f7e7ee]">
                Apply Filters
              </button>
            </form>
            <form action="/search" className="flex items-stretch gap-2">
              <input type="hidden" name="master" value="1" />
              <input
                name="q"
                placeholder="Search releases"
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/30 bg-white/12 px-4 text-sm text-white placeholder:text-[#edd2dc]"
              />
              <button type="submit" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#49243e] transition hover:bg-[#f7e7ee]" aria-label="Search">
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid gap-5 sm:grid-cols-2">
            {filtered.map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-3xl border border-[#dcc0ca] bg-white shadow-[0_14px_34px_rgba(73,36,62,0.09)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(73,36,62,0.15)]">
                <Link href={`/updates/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <ContentImage src={imageFromPost(post)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8d637f]">
                    {String((post.content as any)?.category || 'Update')}
                  </p>
                  <h2 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug text-[#3c2034]">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#64495c]">{excerpt(post.summary)}</p>
                  <div className="mt-4 flex items-center justify-end text-xs text-[#8d637f]">
                    <Link href={`/updates/${post.slug}`} className="font-semibold text-[#704264] hover:text-[#49243e]">Read More</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-[#dcc3cd] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d637f]">Reference</p>
              <div className="relative mt-3 h-44 overflow-hidden rounded-xl">
                <ContentImage src="/freepik-assets/news-media-distribution.svg" alt="News listing reference" fill className="object-cover" />
              </div>
            </div>
            <div className="rounded-2xl border border-[#dcc3cd] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d637f]">Recent Headlines</p>
              <div className="mt-4 space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <Link key={post.id} href={`/updates/${post.slug}`} className="block border-b border-[#ecdce2] pb-3 text-sm leading-6 text-[#4b2a40] last:border-b-0 last:pb-0">
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}
