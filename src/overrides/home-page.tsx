import Link from 'next/link'
import { ArrowRight, BarChart3, Globe2, Megaphone, Newspaper, Radar, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function imageFromPost(post: any) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item: any) => typeof item?.url === 'string' && item.url)?.url
  const contentImages = post?.content && typeof post.content === 'object' ? (post.content as any).images : []
  const fallback = Array.isArray(contentImages) ? contentImages.find((item: unknown) => typeof item === 'string') : null
  return mediaUrl || fallback || '/freepik-assets/news-media-distribution.svg'
}

function removeDateText(value: string | undefined) {
  if (!value) return ''
  return value
    .replace(/\b(?:Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|Sept|September|Oct|October|Nov|November|Dec|December)\b[\s,.-]*\d{1,2}(?:[\s,.-]*\d{4})?/gi, '')
    .replace(/\b\d{1,2}:\d{2}\s*(?:AM|PM)?\s*(?:ET|IST|UTC)?\b/gi, '')
    .replace(/\b20\d{2}\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 14, { fresh: true })
  const lead = posts[0]
  const heroPosts = posts.slice(0, 5)
  const featuredStories = posts.slice(0, 4)
  const features = [
    {
      icon: Megaphone,
      title: 'Press Distribution',
      description: 'Publish updates across media-ready channels with consistent formatting and clear structure.',
      href: '/create/mediaDistribution',
    },
    {
      icon: TrendingUp,
      title: 'Visibility Growth',
      description: 'Turn announcements into discoverable stories with stronger headline hierarchy and semantic metadata.',
      href: '/updates',
    },
    {
      icon: BarChart3,
      title: 'Coverage Analytics',
      description: 'Track story engagement, category momentum, and content performance from one newsroom flow.',
      href: '/pricing',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Support local and global communication campaigns through one scalable publishing destination.',
      href: '/contact',
    },
  ]

  const testimonials = [
    {
      quote: 'News Insight Zone gave our PR team a polished and reliable publishing workflow in less than a week.',
      name: 'Ritika Sharma',
      company: 'NexaFin Technologies',
    },
    {
      quote: 'The newsroom layout improved readability and helped our releases earn better pickup from journalists.',
      name: 'Jordan Miller',
      company: 'CloudReef Media',
    },
    {
      quote: 'We needed speed without sacrificing presentation quality. This platform delivered both.',
      name: 'Aman Verma',
      company: 'Vertex Mobility',
    },
  ]

  const brands = ['Bloomberg', 'Reuters', 'Forbes', 'TechCrunch', 'Mint', 'CNBC']

  const solutions = [
    { icon: Newspaper, label: 'Corporate Announcements' },
    { icon: Radar, label: 'Product Launches' },
    { icon: ShieldCheck, label: 'Crisis Communication' },
    { icon: Sparkles, label: 'Brand Storytelling' },
    { icon: TrendingUp, label: 'Investor Updates' },
  ]

  const referenceImages = ['/freepik-assets/news-media-distribution.svg', '/freepik-assets/signup-registration.svg', '/freepik-assets/contact-page-business.svg']
  const reasons = [
    {
      color: 'bg-[#77a8f3]',
      title: 'True Multichannel Amplin',
      description: 'Extend your story reach and distribute your news across channels for stronger visibility and measurable impact.',
    },
    {
      color: 'bg-[#17b4b8]',
      title: 'Unmatched Discoverability',
      description: 'Gain stronger search visibility and reach with media-ready story structures optimized for discoverability.',
    },
    {
      color: 'bg-[#b068f5]',
      title: 'Innovation in One Platform',
      description: 'Plan, create, distribute, and report from one newsroom flow built for speed and clarity.',
    },
    {
      color: 'bg-[#3260c6]',
      title: 'Maximum Visibility',
      description: 'Reach wider media audiences through a trusted distribution network and high-authority channels.',
    },
    {
      color: 'bg-[#ea5ca8]',
      title: 'Most Trusted Source',
      description: 'A reliable distribution destination used by communication teams focused on quality and consistency.',
    },
    {
      color: 'bg-[#fd6a2b]',
      title: 'Premium Service and Guidance',
      description: 'Publishing support, strategic guidance, and editorial best practices to improve release performance.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(135deg,#49243e_0%,#704264_58%,#bb8493_100%)] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-24">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Media press media platform
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">The News Starts Here</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#f4dde6] sm:text-lg">
              Publish high-impact announcements, distribute press-ready stories, and build newsroom authority with a clean SaaS publishing experience.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#49243e] transition hover:bg-[#f7e9ef]">
                Browse Latest News
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Trending releases</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Latest News Cards</h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-[#704264] hover:text-[#49243e]">View all</Link>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-3">
            {heroPosts.map((post) => (
              <Link
                key={post.id}
                href={`/updates/${post.slug}`}
                className="group min-w-[280px] snap-start overflow-hidden rounded-3xl border border-[#d9bcc8] bg-white shadow-[0_15px_40px_rgba(73,36,62,0.1)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(73,36,62,0.18)] sm:min-w-[330px]"
              >
                <div className="relative h-44 overflow-hidden">
                  <ContentImage src={imageFromPost(post)} alt={removeDateText(post.title) || post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-[#3b1f33]">{removeDateText(post.title) || post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">What Sets PR Newswire Apart</h2>
          <p className="mt-4 text-3xl font-semibold text-[#21324a]">Top Reasons to Work with PR Newswire</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl border border-[#d8d8dc] bg-white p-8 shadow-[0_8px_25px_rgba(17,24,39,0.08)]">
                <span className={`inline-block h-12 w-12 rounded-full ${reason.color}`} />
                <h3 className="mt-6 text-3xl font-semibold leading-snug text-[#1f2f45]">{reason.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#334155]">{reason.description}</p>
                <Link href="/about" className="mt-5 inline-flex text-lg font-semibold text-[#0b3a79] hover:underline">Learn More</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Featured Solutions</h2>
          <p className="mt-4 text-xl text-[#334155]">Explore tools that help you plan smarter, create faster, and amplify your story further.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {referenceImages.map((img, idx) => (
              <article key={img} className="space-y-4">
                <div className="relative h-72 overflow-hidden rounded-xl border border-[#d8d8dc] bg-[#ecf1f8]">
                  <ContentImage src={img} alt="Featured solution preview" fill className="object-cover" />
                </div>
                <h3 className="text-3xl font-semibold leading-snug text-[#1f2f45]">
                  {idx === 0 && 'Instantly Turn One Story into Multiple Campaign Assets'}
                  {idx === 1 && 'Plan Smarter and Build Better PR Campaigns'}
                  {idx === 2 && 'Make Every Press Release More Engaging and Effective'}
                </h3>
                <p className="text-lg leading-8 text-[#334155]">
                  {idx === 0 && 'Generate supporting campaign content to expand your message across channels and audiences.'}
                  {idx === 1 && 'Move from idea to execution with an AI-guided planning workflow designed for communication teams.'}
                  {idx === 2 && 'Strengthen every release with practical recommendations and quality cues before publishing.'}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/updates" className="inline-flex w-full items-center justify-center rounded-md border border-[#9ca3af] px-4 py-4 text-xl text-[#374151] hover:bg-[#f8fafc]">Explore our platform</Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Featured Stories</h2>
          <p className="mt-4 text-xl text-[#334155]">Highlights from the latest press releases</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-xl border border-[#d8d8dc] bg-white p-4">
              <div className="relative h-96 overflow-hidden rounded-lg bg-[#dfe7f5]">
                <ContentImage src={imageFromPost(featuredStories[0])} alt={removeDateText(featuredStories[0]?.title) || featuredStories[0]?.title || 'Featured story'} fill className="object-cover" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-[#64748b]">Featured Story</p>
              <h3 className="mt-2 text-4xl font-semibold leading-snug text-[#1f2f45]">{removeDateText(featuredStories[0]?.title) || 'Latest newsroom updates'}</h3>
              <p className="mt-3 text-lg leading-8 text-[#334155]">{removeDateText(featuredStories[0]?.summary) || 'Read the latest media distribution update from our newsroom.'}</p>
            </article>
            <div className="space-y-4">
              {featuredStories.slice(1).map((post) => (
                <Link key={post.id} href={`/updates/${post.slug}`} className="grid grid-cols-[120px_1fr] gap-4 rounded-xl border border-[#d8d8dc] bg-white p-3 hover:bg-[#f8fafc]">
                  <div className="relative h-24 overflow-hidden rounded-lg">
                    <ContentImage src={imageFromPost(post)} alt={removeDateText(post.title) || post.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748b]">Latest Story</p>
                    <h4 className="line-clamp-2 text-2xl font-semibold text-[#1f2f45]">{removeDateText(post.title) || post.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Resources for Journalists</h2>
              <div className="mt-6 rounded-xl border border-[#d8d8dc] bg-white p-5">
                <div className="relative h-72 overflow-hidden rounded-lg bg-[#e9eff8]">
                  <ContentImage src="/freepik-assets/contact-page-business.svg" alt="Resources for journalists" fill className="object-contain p-4" />
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-[#1f2f45]">Meeting a Deadline?</h3>
                <p className="mt-3 text-lg leading-8 text-[#334155]">Get story ideas, expert support, and multimedia resources to stay ahead of your next deadline.</p>
                <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#9ca3af] px-4 py-4 text-xl text-[#374151] hover:bg-[#f8fafc]">Visit PR Newswire for Journalists</Link>
              </div>
            </div>
            <div>
              <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Resources for Communicators</h2>
              <div className="mt-6 space-y-4 rounded-xl border border-[#d8d8dc] bg-white p-5">
                {[0, 1, 2].map((idx) => (
                  <article key={idx} className="grid grid-cols-[1fr_180px] gap-4 border-b border-[#e5e7eb] pb-4 last:border-b-0 last:pb-0">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#64748b]">{idx === 1 ? 'Videos & Webinars' : 'White Papers'}</p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug text-[#1f2f45]">
                        {idx === 0 && '2025 State of the Media Report'}
                        {idx === 1 && 'From Keywords to Conversations: How AI Search is Reshaping PR'}
                        {idx === 2 && 'A Beginner’s Guide to Creating an Effective Press Release'}
                      </h3>
                    </div>
                    <div className="relative h-28 overflow-hidden rounded-lg bg-[#ecf1f8]">
                      <ContentImage src={referenceImages[idx]} alt="Resource card preview" fill className="object-cover" />
                    </div>
                  </article>
                ))}
                <Link href="/help" className="inline-flex w-full items-center justify-center rounded-md border border-[#9ca3af] px-4 py-4 text-xl text-[#374151] hover:bg-[#f8fafc]">Browse All Resources</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Trending Topics</h2>
              <p className="mt-4 text-xl text-[#334155]">Track the topics influencing conversations and decisions around the world.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {['Quarterly Earnings Reports', "Mother's Day", 'Memorial Day'].map((topic, idx) => (
                  <div key={topic} className="overflow-hidden rounded-xl border border-[#d8d8dc] bg-white">
                    <div className="relative h-44">
                      <ContentImage src={referenceImages[idx]} alt={topic} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-[#1f2f45]">{topic}</h3>
                      <p className="mt-2 text-base leading-7 text-[#334155]">Explore latest news and press activity in this trending category.</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/latest-news" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#9ca3af] px-4 py-4 text-xl text-[#374151] hover:bg-[#f8fafc]">View All Trending Topics</Link>
            </div>
            <div>
              <h2 className="border-b-4 border-[#c6c6c8] pb-2 text-4xl font-semibold tracking-[-0.03em] text-[#1f2f45]">Browse News</h2>
              <p className="mt-4 text-xl text-[#334155]">Find news by industry or search topics that matter most to you.</p>
              <div className="mt-6 rounded-xl border border-[#d8d8dc] bg-white p-5">
                {['News in Focus', 'Auto & Transportation', 'Consumer Products & Retail', 'Energy', 'Entertainment', 'Financial Services & Investing', 'General Business', 'Health', 'People & Culture', 'Policy & Public Interest', 'Sports'].map((item) => (
                  <div key={item} className="border-b border-[#e5e7eb] py-3 text-xl text-[#1f2f45] last:border-b-0">{item}</div>
                ))}
                <Link href="/search" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-[#9ca3af] px-4 py-4 text-xl text-[#374151] hover:bg-[#f8fafc]">Browse All Sectors & Topics</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(90deg,#2f49b5_0%,#251483_100%)] text-white">
          <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[320px_1fr]">
            <div className="relative min-h-[220px]">
              <ContentImage src="/freepik-assets/signin-authentication.svg" alt="Newsletter visual" fill className="object-cover" />
            </div>
            <div className="px-4 py-12 sm:px-6 lg:px-12">
              <p className="text-center text-xl uppercase tracking-[0.08em] text-[#dbeafe]">Receive monthly trending press releases and industry news</p>
              <h2 className="mt-3 text-center text-5xl font-semibold tracking-[-0.03em]">Straight to your inbox</h2>
              <div className="mt-8 grid gap-3 md:grid-cols-[1fr_260px_160px]">
                <input type="email" placeholder="Enter your email" className="h-16 rounded-full border border-white/30 bg-white px-7 text-xl text-[#1f2f45] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-white/60" />
                <select className="h-16 rounded-full border border-white/30 bg-white px-6 text-xl text-[#1f2f45] focus:outline-none focus:ring-2 focus:ring-white/60">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
                <Link href="/register" className="inline-flex h-16 items-center justify-center rounded-full bg-[#e05a2a] px-8 text-3xl font-semibold text-white transition hover:bg-[#c84f25]">SIGN UP</Link>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#dbeafe]">
                We handle your information according to our privacy policy. You can unsubscribe or customize your preferences from the link included in each email.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_16px_45px_rgba(73,36,62,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Core capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Turn Your News into Headlines</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-[#e6ced7] bg-[#fff9fb] p-5 transition hover:border-[#bb8493]">
                  <feature.icon className="h-5 w-5 text-[#704264]" />
                  <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6e4f62]">{feature.description}</p>
                  <Link href={feature.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#704264] hover:text-[#49243e]">
                   
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="grid gap-6 rounded-[2rem] border border-[#dbc1cc] bg-white p-6 shadow-[0_18px_55px_rgba(73,36,62,0.08)] lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Discover</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Discover Your Next Story</h2>
              <p className="mt-4 text-sm leading-8 text-[#644a5c]">
                Explore timely topics, sector-specific updates, and brand announcements in one streamlined newsroom surface.
              </p>
              <Link href={lead ? `/updates/${lead.slug}` : '/updates'} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#49243e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d1d34]">
                Read highlighted story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {referenceImages.map((img, idx) => (
                <div key={img} className={idx === 0 ? 'relative h-44 overflow-hidden rounded-2xl sm:col-span-2' : 'relative h-36 overflow-hidden rounded-2xl'}>
                  <ContentImage src={img} alt="News Insight Zone visual reference" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-[2rem] bg-[linear-gradient(120deg,#49243e_0%,#704264_68%)] px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Ready to Share Your News?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#ead4de]">
              Publish your next release with a newsroom-first layout built for credibility, discovery, and conversion.
            </p>
            <Link href="/create/mediaDistribution" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#49243e] hover:bg-[#f7e9ef]">
              Submit Press Media
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
