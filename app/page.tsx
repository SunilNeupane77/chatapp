import type { FC } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant AI Responses",
    description:
      "Your chat widget answers common questions instantly — no waiting, no ticket queue. Powered by your own knowledge base.",
  },
  {
    icon: "🎯",
    title: "Lead Capture on Autopilot",
    description:
      "The widget qualifies visitors and collects emails before they bounce. Every conversation becomes a potential customer.",
  },
  {
    icon: "🔗",
    title: "Connects to Your Stack",
    description:
      "Push conversations to HubSpot, Slack, Notion, or any webhook. Works with the tools your team already uses.",
  },
  {
    icon: "📊",
    title: "Conversation Analytics",
    description:
      "See exactly what your visitors ask. Use real questions to improve your docs, onboarding, and product roadmap.",
  },
  {
    icon: "🌍",
    title: "Multilingual by Default",
    description:
      "Auto-detect visitor language and respond fluently. Support global customers without hiring a global team.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant, GDPR ready, and end-to-end encrypted. Your customer data never trains third-party models.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Add the Widget",
    description:
      "Paste one line of code — or use our ChatDrill integration — and the chat widget appears on your site in minutes.",
  },
  {
    step: "02",
    title: "Train on Your Content",
    description:
      "Upload docs, paste URLs, or connect your help center. The AI learns your product instantly.",
  },
  {
    step: "03",
    title: "Go Live & Convert",
    description:
      "Watch leads roll in. Escalate complex issues to humans seamlessly. Every session is logged and searchable.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for indie hackers and small projects.",
    features: [
      "500 conversations / mo",
      "1 widget",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start for Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For growing SaaS teams that need more power.",
    features: [
      "Unlimited conversations",
      "5 widgets",
      "Advanced analytics",
      "CRM integrations",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Dedicated infrastructure, SLA, and white-glove onboarding.",
    features: [
      "Everything in Pro",
      "Unlimited widgets",
      "SSO / SAML",
      "Dedicated success manager",
      "Custom AI training",
      "SLA guarantee",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "How long does it take to set up?",
    a: "Most teams are live in under 10 minutes. Paste the script tag, upload your content, and you're done.",
  },
  {
    q: "Can the widget hand off to a human agent?",
    a: "Yes. When the AI can't resolve an issue, it smoothly transfers the conversation to your support team via email, Slack, or your helpdesk.",
  },
  {
    q: "Does it work with Next.js / React apps?",
    a: "Absolutely. Add the ChatDrill script to your layout and the widget loads on every page. You can also use our React component for deeper customization.",
  },
  {
    q: "What happens when I exceed the conversation limit?",
    a: "We'll send you an email heads-up before you hit the limit. You can upgrade at any time — no conversations are dropped mid-session.",
  },
];

const LOGOS = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "GitHub"];

// ─── Sub-Components ──────────────────────────────────────────────────────────

const Navbar: FC = () => (
  <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md">
    <nav className="container flex h-16 items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 font-semibold text-lg text-[var(--foreground)]">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-600)] text-white text-sm font-bold">
          F
        </span>
        FlowDesk
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--muted-fg)]">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <a
          href="#pricing"
          className="hidden sm:inline text-sm text-[var(--muted-fg)] hover:text-[var(--foreground)] transition-colors"
        >
          Sign in
        </a>
        <a
          href="#pricing"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-600)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[var(--brand-700)] hover:shadow-md"
        >
          Get Started Free
        </a>
      </div>
    </nav>
  </header>
);

const Hero: FC = () => (
  <section className="hero-mesh py-24 md:py-36">
    <div className="container flex flex-col items-center text-center gap-8">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-200)] bg-[var(--brand-50)] px-4 py-1.5 text-xs font-medium text-[var(--brand-700)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-500)] pulse-ring" />
        Powered by ChatDrill — Live chat + AI in one widget
      </span>

      {/* Heading */}
      <h1 className="max-w-3xl text-5xl md:text-6xl font-bold tracking-tight leading-tight text-[var(--foreground)]">
        Support customers{" "}
        <span className="gradient-text">24/7</span>{" "}
        without growing your team
      </h1>

      {/* Sub */}
      <p className="max-w-xl text-lg text-[var(--muted-fg)] leading-relaxed">
        FlowDesk embeds an AI-powered chat widget on your site in minutes.
        Answer questions instantly, capture leads, and escalate to humans —
        all from one dashboard.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#pricing"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--brand-600)] px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-[var(--brand-700)] hover:shadow-lg"
        >
          Start for free
          <span aria-hidden>→</span>
        </a>
        <a
          href="#how-it-works"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-white px-8 text-base font-medium text-[var(--foreground)] transition-all hover:border-[var(--brand-300)] hover:shadow-sm"
        >
          See how it works
        </a>
      </div>

      {/* Social proof */}
      <p className="text-sm text-[var(--muted-fg)]">
        Trusted by{" "}
        <span className="font-semibold text-[var(--foreground)]">2,400+</span>{" "}
        SaaS teams worldwide
      </p>

      {/* Dummy widget preview card */}
      <div className="mt-8 w-full max-w-sm rounded-2xl border border-[var(--border)] bg-white p-5 text-left shadow-[var(--shadow-lg)] fade-up">
        <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3 mb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-600)] text-white text-sm font-bold">
            AI
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">FlowDesk Support</p>
            <p className="text-xs text-green-500 font-medium">● Online</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl rounded-tl-sm bg-[var(--muted)] px-4 py-2.5 text-sm text-[var(--foreground)] max-w-[85%]">
            👋 Hi! How can I help you today?
          </div>
          <div className="ml-auto rounded-xl rounded-tr-sm bg-[var(--brand-600)] px-4 py-2.5 text-sm text-white max-w-[85%] text-right">
            How do I integrate the widget?
          </div>
          <div className="rounded-xl rounded-tl-sm bg-[var(--muted)] px-4 py-2.5 text-sm text-[var(--foreground)] max-w-[90%]">
            Easy! Just paste one script tag into your{" "}
            <code className="rounded bg-[var(--border)] px-1 text-xs font-mono">
              layout.tsx
            </code>{" "}
            and you&apos;re live in minutes. 🚀
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted-fg)]">
          <span className="flex-1">Type a message…</span>
          <span className="text-[var(--brand-600)]">↑</span>
        </div>
      </div>
    </div>
  </section>
);

const LogoBar: FC = () => (
  <section className="border-y border-[var(--border)] bg-[var(--muted)] py-10">
    <div className="container">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-[var(--muted-fg)]">
        Integrates with the tools you already love
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {LOGOS.map((name) => (
          <li
            key={name}
            className="text-sm font-semibold text-[var(--muted-fg)] opacity-60 hover:opacity-100 transition-opacity"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Features: FC = () => (
  <section id="features" className="py-24">
    <div className="container">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Everything your support team needs
        </h2>
        <p className="mt-3 text-[var(--muted-fg)] max-w-xl mx-auto">
          One widget. Unlimited conversations. Built for teams that move fast.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="card-lift rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-50)] text-2xl">
              {f.icon}
            </div>
            <h3 className="mb-2 font-semibold text-[var(--foreground)]">{f.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted-fg)]">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks: FC = () => (
  <section id="how-it-works" className="bg-[var(--muted)] py-24">
    <div className="container">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Up and running in 3 steps
        </h2>
        <p className="mt-3 text-[var(--muted-fg)]">
          No complex setup. No engineering sprint required.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.step} className="flex flex-col gap-4">
            <span className="text-5xl font-black text-[var(--brand-100)]">{s.step}</span>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">{s.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted-fg)]">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Code snippet */}
      <div className="mt-14 rounded-2xl bg-[#0f172a] p-6 md:p-8 shadow-[var(--shadow-md)]">
        <p className="mb-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
          app/layout.tsx — Add ChatDrill widget
        </p>
        <pre className="overflow-x-auto text-sm font-mono leading-7 text-slate-200">
{`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* ChatDrill Widget */}
        <Script
          id="chatdrill-widget"
          strategy="afterInteractive"
          src="https://chatdrill.com/widget.js"
          data-widget-id="YOUR_WIDGET_ID"
        />
      </body>
    </html>
  )
}`}
        </pre>
      </div>
    </div>
  </section>
);

const Pricing: FC = () => (
  <section id="pricing" className="py-24">
    <div className="container">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-[var(--muted-fg)]">
          Start free, scale when you&apos;re ready. No hidden fees.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 items-start">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 shadow-[var(--shadow-sm)] ${
              plan.highlighted
                ? "border-[var(--brand-500)] bg-[var(--brand-600)] text-white scale-105 shadow-[var(--shadow-lg)]"
                : "border-[var(--border)] bg-[var(--card)]"
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3
              className={`text-xl font-bold ${
                plan.highlighted ? "text-white" : "text-[var(--foreground)]"
              }`}
            >
              {plan.name}
            </h3>
            <div className="mt-2 flex items-end gap-1">
              <span
                className={`text-4xl font-black ${
                  plan.highlighted ? "text-white" : "text-[var(--foreground)]"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`mb-1 text-sm ${
                  plan.highlighted ? "text-blue-100" : "text-[var(--muted-fg)]"
                }`}
              >
                /{plan.period}
              </span>
            </div>
            <p
              className={`mt-2 mb-6 text-sm ${
                plan.highlighted ? "text-blue-100" : "text-[var(--muted-fg)]"
              }`}
            >
              {plan.description}
            </p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span
                    className={`text-base ${
                      plan.highlighted ? "text-blue-200" : "text-[var(--brand-500)]"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={plan.highlighted ? "text-blue-50" : "text-[var(--foreground)]"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                plan.highlighted
                  ? "bg-white text-[var(--brand-700)] hover:bg-blue-50"
                  : "bg-[var(--brand-600)] text-white hover:bg-[var(--brand-700)]"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Faq: FC = () => (
  <section id="faq" className="bg-[var(--muted)] py-24">
    <div className="container max-w-3xl">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-[var(--foreground)]">
        Frequently asked questions
      </h2>
      <div className="space-y-6">
        {FAQS.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
          >
            <h3 className="mb-2 font-semibold text-[var(--foreground)]">{item.q}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted-fg)]">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CtaBanner: FC = () => (
  <section className="py-24">
    <div className="container">
      <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-600)] to-indigo-600 p-12 md:p-16 text-center shadow-[var(--shadow-lg)]">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to stop losing customers to slow support?
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
          Add the ChatDrill widget to your site today and start converting
          visitors into customers — while you sleep.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[var(--brand-700)] shadow transition-all hover:shadow-lg hover:scale-105"
          >
            Get started free
            <span aria-hidden>→</span>
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center rounded-full border border-white/30 px-8 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            Book a demo
          </a>
        </div>
        <p className="mt-6 text-xs text-blue-200">
          No credit card required · Free forever plan · Cancel anytime
        </p>
      </div>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--muted)] py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--brand-600)] text-white text-xs font-bold">
          F
        </span>
        FlowDesk
      </div>
      <nav className="flex flex-wrap gap-6 text-sm text-[var(--muted-fg)]">
        {["Privacy", "Terms", "Security", "Blog", "Docs", "Status"].map((l) => (
          <a key={l} href="#" className="hover:text-[var(--foreground)] transition-colors">
            {l}
          </a>
        ))}
      </nav>
      <p className="text-xs text-[var(--muted-fg)]">
        © {new Date().getFullYear()} FlowDesk. Powered by ChatDrill.
      </p>
    </div>
  </footer>
);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
