import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-[#3f2036] sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-[#6a4d61]">
          Connect with our media desk for press release support, newsroom collaboration, and communication strategy guidance.
        </p>
        <section className="mt-10 space-y-6">
          <article className="rounded-[2rem] border border-[#dcc1cb] bg-white p-6 shadow-[0_16px_44px_rgba(73,36,62,0.1)] sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f2036]">Media Relations & Press Support</h2>
            <p className="mt-4 text-base leading-8 text-[#6a4d61]">
              We support communication teams with press release distribution strategy, story positioning, and newsroom-ready publishing standards.
              From launch announcements to corporate updates, our focus is helping your message reach journalists, investors, and industry audiences with clarity.
            </p>
            <p className="mt-4 text-base leading-8 text-[#6a4d61]">
              Coverage includes editorial optimization, timing recommendations, distribution best practices, and amplification pathways aligned to your sector.
            </p>
          </article>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#dcc1cb] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#3f2036]">Press Release Advisory</h3>
              <p className="mt-3 text-sm leading-7 text-[#6a4d61]">
                Guidance on release structure, headline quality, message clarity, and media-ready formatting.
              </p>
            </article>
            <article className="rounded-2xl border border-[#dcc1cb] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#3f2036]">Newsroom Distribution Planning</h3>
              <p className="mt-3 text-sm leading-7 text-[#6a4d61]">
                Strategic planning for target sectors, distribution lanes, and discoverability improvement.
              </p>
            </article>
            <article className="rounded-2xl border border-[#dcc1cb] bg-white p-6">
              <h3 className="text-xl font-semibold text-[#3f2036]">Communication Partnerships</h3>
              <p className="mt-3 text-sm leading-7 text-[#6a4d61]">
                Support for enterprise communication programs, recurring campaigns, and media collaboration initiatives.
              </p>
            </article>
          </div>

          <article className="rounded-[2rem] border border-[#dcc1cb] bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3f2036]">Editorial Focus Areas</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Corporate Announcements</p>
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Product Launches</p>
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Financial & Investor Updates</p>
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Industry Research & Insights</p>
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Policy & Public Interest News</p>
              <p className="rounded-xl bg-[#fff9fb] px-4 py-3 text-sm text-[#5f3f54]">Executive Thought Leadership</p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
