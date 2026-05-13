import Link from 'next/link'
import { ArrowRight, Sparkles, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left side - Welcome content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dcc4cd] bg-[#fff9fb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">
              <Sparkles className="h-4 w-4" />
              Join News Insight Zone
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#3f2036] sm:text-5xl">
              Create Your Newsroom Account
            </h1>
            <p className="text-lg leading-8 text-[#6a4d61] max-w-lg">
              Start publishing press media, managing media coverage, and building your newsroom presence.
            </p>
            
            <div className="space-y-4">
              {[
                'Instant press media publishing',
                'Media tracking and analytics',
                'Professional newsroom profile',
                'Global distribution network'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-xl border border-[#dcc4cd] bg-white p-4">
                  <Check className="h-5 w-5 text-[#704264]" />
                  <span className="text-sm text-[#4b2a40]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Registration form */}
          <div className="rounded-[2rem] border border-[#dcc4cd] bg-white p-8 shadow-[0_16px_44px_rgba(73,36,62,0.1)]">
            <div className="relative h-48 overflow-hidden rounded-2xl border border-[#dcc4cd] mb-6">
              <ContentImage 
                src="/freepik-assets/signup-registration.svg" 
                alt="Create account illustration" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#3d2135] mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="h-12 w-full rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135] placeholder:text-[#8d637f] focus:border-[#704264] focus:outline-none" 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#3d2135] mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="h-12 w-full rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135] placeholder:text-[#8d637f] focus:border-[#704264] focus:outline-none" 
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3d2135] mb-2">Password</label>
                <input 
                  type="password" 
                  className="h-12 w-full rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135] placeholder:text-[#8d637f] focus:border-[#704264] focus:outline-none" 
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3d2135] mb-2">Account Type</label>
                <select className="h-12 w-full rounded-xl border border-[#dcc4cd] bg-[#fff9fb] px-4 text-sm text-[#3d2135] focus:border-[#704264] focus:outline-none">
                  <option>Select your account type</option>
                  <option>Press Room / Corporate</option>
                  <option>Media / Journalist</option>
                  <option>PR Agency</option>
                  <option>Individual Creator</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-[#dcc4cd]" />
                <label className="text-sm text-[#6a4d61]">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button 
                type="submit" 
                className="h-12 w-full rounded-xl bg-[#49243e] px-6 text-sm font-semibold text-white transition hover:bg-[#3d1d34] focus:outline-none focus:ring-2 focus:ring-[#704264] focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#6a4d61]">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-[#704264] hover:text-[#49243e] inline-flex items-center gap-1">
                  Sign in
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
