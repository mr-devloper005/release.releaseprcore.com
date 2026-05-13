import { Download, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { ContentImage } from '@/components/shared/content-image'

const assets = [
  {
    title: 'Brand Logo Kit',
    description: 'Primary and secondary logo assets with transparent backgrounds for publication use.',
    type: 'PNG + SVG',
    preview: '/freepik-assets/signin-authentication.svg',
  },
  {
    title: 'Media Deck',
    description: 'Company overview, milestones, and media highlights for journalists and editors.',
    type: 'PDF',
    preview: '/freepik-assets/pricing-plans.svg',
  },
  {
    title: 'Screenshot Pack',
    description: 'Platform screenshots and product visuals for media features and partner announcements.',
    type: 'ZIP',
    preview: '/freepik-assets/news-media-distribution.svg',
  },
]

const coverage = [
  { outlet: 'Business Journal', headline: 'How digital press platforms are evolving newsroom distribution.', date: 'March 21, 2026' },
  { outlet: 'Startup Chronicle', headline: 'News Insight Zone expands media delivery workflow for founders.', date: 'April 7, 2026' },
  { outlet: 'Media Tech Review', headline: 'Press automation trends and the rise of structured announcement pipelines.', date: 'April 19, 2026' },
]

export default function PressPage() {
  return (
    <PageShell title="Press" description="Official media resources, assets, and recent coverage.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-[#dcc4cd] bg-white p-6 shadow-[0_14px_38px_rgba(73,36,62,0.1)]">
          <h2 className="text-xl font-semibold text-[#3d2135]">Press Kit</h2>
          <p className="mt-2 text-sm leading-7 text-[#65495c]">Use these resources for editorial references, media stories, and partner coverage.</p>
          <div className="mt-5 grid gap-4">
            {assets.map((asset) => (
              <article key={asset.title} className="overflow-hidden rounded-2xl border border-[#e6d2da] bg-[#fff9fb]">
                <div className="relative h-36 overflow-hidden">
                  <ContentImage src={asset.preview} alt={asset.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#3f2236]">{asset.title}</h3>
                    <span className="rounded-full bg-[#f3dfe7] px-2.5 py-1 text-xs font-semibold text-[#704264]">{asset.type}</span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#65495c]">{asset.description}</p>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#49243e] px-4 py-2 text-xs font-semibold text-white hover:bg-[#3d1d34]">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          {coverage.map((item) => (
            <article key={item.headline} className="rounded-2xl border border-[#dcc4cd] bg-white p-5 shadow-[0_12px_32px_rgba(73,36,62,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d637f]">{item.outlet}</p>
              <p className="mt-2 text-sm leading-7 text-[#3f2236]">{item.headline}</p>
              <p className="mt-2 text-xs text-[#8d637f]">{item.date}</p>
              <Link href="/updates" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#704264] hover:text-[#49243e]">
                View newsroom <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </section>
      </div>
    </PageShell>
  )
}
