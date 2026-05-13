import Link from 'next/link'
import { Award, Globe2, Sparkles, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'

const stats = [
  { label: 'Releases published', value: '25K+' },
  { label: 'Media pickups', value: '92K+' },
  { label: 'Partner brands', value: '1.8K' },
]

const pillars = [
  {
    icon: Sparkles,
    title: 'Editorial Clarity',
    text: 'Every update is structured for readability, credibility, and strong narrative flow.',
  },
  {
    icon: Globe2,
    title: 'Distribution Reach',
    text: 'Support local and global announcement campaigns through one publishing system.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    text: 'Built for PR teams, communication leads, and founders managing high publishing velocity.',
  },
  {
    icon: Award,
    title: 'Brand Trust',
    text: 'Professional presentation helps your releases feel official and media ready.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="rounded-[2rem] bg-[linear-gradient(130deg,#49243e_0%,#704264_62%,#bb8493_100%)] p-7 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0dce5]">About us</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">About {SITE_CONFIG.name}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#f3dce5]">
            {SITE_CONFIG.name} is a media press media platform designed for modern communication teams who need fast publishing, premium presentation, and consistent distribution.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/30 bg-white/10 p-4">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-[#f0dce5]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#dcc4cd] bg-white p-5 shadow-[0_12px_35px_rgba(73,36,62,0.08)]">
                <item.icon className="h-5 w-5 text-[#704264]" />
                <h2 className="mt-3 text-xl font-semibold text-[#3a1f33]">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#65495c]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="rounded-[2rem] border border-[#dcc4cd] bg-white p-5 shadow-[0_14px_38px_rgba(73,36,62,0.1)]">
            <div className="relative h-64 overflow-hidden rounded-2xl sm:h-72">
              <ContentImage src="/freepik-assets/news-media-distribution.svg" alt="About News Insight Zone" fill className="object-cover" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#3b2034]">Mission</h3>
            <p className="mt-3 text-sm leading-8 text-[#65495c]">
              Our mission is to make professional media distribution accessible, efficient, and visually strong for growing brands and established enterprises alike.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="relative h-32 overflow-hidden rounded-xl">
                <ContentImage src="/freepik-assets/contact-page-business.svg" alt="Business communication" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-xl">
                <ContentImage src="/freepik-assets/signin-authentication.svg" alt="Secure platform" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/updates" className="rounded-full bg-[#49243e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3d1d34]">
                Explore Latest News
              </Link>
              <Link href="/contact" className="rounded-full border border-[#c9a8b5] bg-[#fff7fa] px-5 py-2.5 text-sm font-semibold text-[#704264] hover:bg-[#f8e7ee]">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
