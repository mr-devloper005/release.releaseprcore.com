import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-[#3f2036] sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-[#6a4d61]">
          Have a media query, support request, or partnership discussion? Send your details and our press desk will respond quickly.
        </p>
        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[2rem] border border-[#dcc1cb] bg-white p-6 shadow-[0_16px_44px_rgba(73,36,62,0.1)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="h-12 rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135]" placeholder="Contact Name *" />
              <input className="h-12 rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135]" placeholder="Phone Number" />
            </div>
            <input className="mt-4 h-12 w-full rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135]" placeholder="Email *" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <select className="h-12 rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135]">
                <option>What type of organization are you?</option>
              </select>
              <select className="h-12 rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135]">
                <option>Subject: How may we help you?</option>
              </select>
            </div>
            <textarea className="mt-4 min-h-[160px] w-full rounded-2xl border border-[#dcc4cd] bg-[#fff9fb] px-4 py-3 text-sm text-[#3d2135]" placeholder="Message / Comment *" />
            <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#d8c3cc] bg-[#fff7fa] px-4 py-3 text-sm text-[#7c5e73]">
              <input type="checkbox" />
              I'm not a robot
            </div>
            <button type="submit" className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-[#49243e] px-8 text-sm font-semibold text-white transition hover:bg-[#3d1d34]">
              Submit Now
            </button>
          </form>

          <aside className="space-y-5">
            <div className="relative h-44 overflow-hidden rounded-2xl border border-[#dcc4cd]">
              <ContentImage src="/freepik-assets/contact-page-business.svg" alt="Contact page style reference" fill className="object-cover" />
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}
