import { Check, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

const plans = [
  {
    name: 'Basic',
    price: '$199',
    description: 'Best for startups and first-time media announcements.',
    features: ['Regional distribution', 'Basic analytics', 'Standard media reach'],
  },
  {
    name: 'Pro',
    price: '$399',
    description: 'For growing brands that need stronger visibility and reporting.',
    features: ['National distribution', 'Advanced analytics', 'Expanded media reach'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$799',
    description: 'Enterprise-ready plan for high-impact campaigns.',
    features: ['Global distribution', 'Executive analytics', 'Priority media reach'],
  },
]

const addOns = ['Writing assistance', 'Press media translation', 'Editorial review', 'Priority newsroom support']

const faqs = [
  {
    q: 'How fast is a release published?',
    a: 'Most submissions are reviewed and distributed within the same business day.',
  },
  {
    q: 'Can I upgrade after publishing?',
    a: 'Yes, plans can be upgraded at any point before your next campaign.',
  },
  {
    q: 'Do plans include analytics?',
    a: 'Every plan includes analytics, with deeper reports available on Pro and Premium.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section className="rounded-[2rem] bg-[linear-gradient(130deg,#49243e_0%,#704264_62%,#bb8493_100%)] p-7 text-white sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Pricing Built for Press Distribution</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#f0dce4]">
            Choose a plan that matches your campaign goals and distribution reach. Upgrade anytime as your newsroom scales.
          </p>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border bg-white p-6 shadow-[0_14px_40px_rgba(73,36,62,0.1)] ${
                plan.popular ? 'border-[#704264] ring-2 ring-[#bb8493]/50' : 'border-[#dcc4cd]'
              }`}
            >
              {plan.popular ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Most popular</p> : null}
              <h2 className="mt-2 text-2xl font-semibold text-[#3e2135]">{plan.name}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-[#49243e]">{plan.price}</p>
              <p className="mt-3 text-sm leading-7 text-[#65495c]">{plan.description}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="inline-flex items-center gap-2 text-[#4f3348]">
                    <Check className="h-4 w-4 text-[#704264]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 h-11 w-full rounded-xl bg-[#49243e] text-sm font-semibold text-white hover:bg-[#3d1d34]">
                Choose {plan.name}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#dcc4cd] bg-white p-6 shadow-[0_14px_36px_rgba(73,36,62,0.08)]">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#3d2135]">Features Comparison</h3>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#ecdde3] text-[#8d637f]">
                    <th className="px-2 py-3 font-semibold">Feature</th>
                    <th className="px-2 py-3 font-semibold">Basic</th>
                    <th className="px-2 py-3 font-semibold">Pro</th>
                    <th className="px-2 py-3 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-[#4f3348]">
                  <tr className="border-b border-[#f0e4e8]"><td className="px-2 py-3">Distribution level</td><td className="px-2 py-3">Regional</td><td className="px-2 py-3">National</td><td className="px-2 py-3">Global</td></tr>
                  <tr className="border-b border-[#f0e4e8]"><td className="px-2 py-3">Analytics depth</td><td className="px-2 py-3">Basic</td><td className="px-2 py-3">Advanced</td><td className="px-2 py-3">Executive</td></tr>
                  <tr><td className="px-2 py-3">Media reach</td><td className="px-2 py-3">Standard</td><td className="px-2 py-3">Expanded</td><td className="px-2 py-3">Priority</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#dcc4cd] bg-white p-6 shadow-[0_14px_36px_rgba(73,36,62,0.08)]">
              <h3 className="text-xl font-semibold text-[#3d2135]">Add-ons</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#5b3e53]">
                {addOns.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#704264]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-44 overflow-hidden rounded-3xl border border-[#dcc4cd]">
              <ContentImage src="/freepik-assets/pricing-plans.svg" alt="Pricing reference" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-[#dcc4cd] bg-white p-6 shadow-[0_14px_36px_rgba(73,36,62,0.08)]">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#3d2135]">Frequently Asked Questions</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-2xl border border-[#eedfe5] bg-[#fff9fb] p-4">
                <h4 className="text-sm font-semibold text-[#49243e]">{item.q}</h4>
                <p className="mt-2 text-sm leading-7 text-[#684c60]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
