import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/ravencourt-logo.png";

export const Route = createFileRoute("/")({
  component: RavencourtPage,
});

const NAV = [
  { id: "approach", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "geographies", label: "Geographies" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const TEAM = [
  {
    initials: "RK",
    name: "Rohan Kapoor",
    title: "Founder & Principal",
    linkedin: "https://linkedin.com/in/raisingcapitalcontact",
  },
  {
    initials: "LM",
    name: "Dr. Luciano Mazzola",
    title: "Senior Advisor, Legal and Cross-Border Structuring",
    linkedin: "https://lcopartners.eu/en/professionals/luciano-mazzola-en",
  },
  {
    initials: "S",
    name: "Sania",
    title: "Partner, Institutional Coverage",
    linkedin: "https://linkedin.com/in/sanian",
  },
  {
    initials: "KL",
    name: "Konstantinos Lanaras",
    title: "Intern — Investment Research & Partnerships",
    sub: "Politecnico di Milano, MSc Fintech, Finance & Digital Innovation",
  },
  {
    initials: "JZ",
    name: "Joey Zhu",
    title: "Intern — Investment Research & Partnerships",
    sub: "NYU Stern, BSc Finance",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-[var(--ink)]">
          <img src={logo} alt="Ravencourt Capital" className="h-9 w-9 object-contain" />
          <span className="font-serif text-lg tracking-wide hidden sm:inline">
            Ravencourt <span className="text-[var(--bronze)]">Capital</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)] hover:text-[var(--bronze)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.18em] border border-[var(--ink)] text-[var(--ink)] px-4 py-2 hover:bg-[var(--ink)] hover:text-background transition-colors"
        >
          Get in touch
        </a>
        <button
          className="md:hidden text-[var(--ink)] text-sm uppercase tracking-widest"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--rule)] bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-[var(--ink)] text-[oklch(0.95_0.008_85)] overflow-hidden"
    >
      {/* Subtle geometric line work */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="1200" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="currentColor" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="currentColor" strokeWidth="0.5" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block opacity-30">
        <div className="w-[420px] h-[420px] border border-[var(--bronze)] rotate-45" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 w-full pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8 text-[var(--bronze-soft)]">Ravencourt Capital · Milan</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            We find the right match across private markets.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[oklch(0.82_0.01_85)] font-light max-w-2xl leading-relaxed">
            Allocator-grade advisory bridging buy-side and sell-side across Europe, MENA, and
            North America.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[var(--bronze)] text-[var(--bronze)] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl text-[var(--ink)] leading-tight">{title}</h2>
    </div>
  );
}

function WhatWeDo() {
  return (
    <section id="approach" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="What we do" title="Two sides of the same conversation." />
        <div className="grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          <div className="bg-background p-10 lg:p-14">
            <p className="eyebrow mb-6">Buy-side</p>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">
              For funds and investors
            </h3>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              We help funds and investors source the right deals before they become competitive.
              We qualify counterparties upfront — strategy, geography, ticket size — so every
              introduction is already relevant. When we bring you something, we have already done
              the work.
            </p>
          </div>
          <div className="bg-background p-10 lg:p-14">
            <p className="eyebrow mb-6">Sell-side</p>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">
              For founders and managers
            </h3>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              We connect founders and fund managers with the right capital and the right buyers.
              We sharpen positioning before any conversation happens and target investors whose
              mandate, ticket size, and timeline genuinely fit the strategy — not volume, but the
              right contacts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const cards = [
    {
      n: "01",
      t: "Match",
      b: "We identify the right counterparty for every mandate — buyer to seller, fund to investor — based on structural fit, not proximity.",
    },
    {
      n: "02",
      t: "Analyse",
      b: "Every engagement is assessed through a combination of operational insight and quantitative frameworks. We apply institutional-grade scrutiny before any introduction is made.",
    },
    {
      n: "03",
      t: "Execute",
      b: "We stay involved through the full transaction lifecycle — from mandate selection and positioning through to closing. Structure, discipline, and outcome alignment at every stage.",
    },
  ];
  return (
    <section className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Our approach" title="Disciplined at every stage." />
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.n}
              className="border border-[var(--rule)] p-10 bg-background hover:border-[var(--bronze)] transition-colors"
            >
              <p className="font-serif text-[var(--bronze)] text-sm tracking-widest mb-8">
                {c.n}
              </p>
              <h3 className="font-serif text-3xl text-[var(--ink)] mb-6">{c.t}</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed text-sm">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      t: "Capital Formation & Strategic Positioning",
      b: "Advisory for sell-side mandates across capital raises, M&A, and secondary transactions. Positioning engineered to withstand institutional diligence.",
    },
    {
      t: "M&A & Strategic Transactions",
      b: "Advisory across founder-led and mid-market transactions from €2M to €50M involving private equity, strategic acquirers, family offices, and search funds.",
    },
    {
      t: "Buy-Side Diligence & Opportunity Screening",
      b: "Investment opportunities filtered and stress-tested through commercial analysis, financial structuring logic, and execution risk assessment.",
    },
    {
      t: "Search Fund & Direct Deal Advisory",
      b: "Support for searchers and acquisition entrepreneurs across deal sourcing, target evaluation, and transaction structuring focused on cash-flow durability and debt capacity.",
    },
  ];
  return (
    <section id="services" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Services" title="A focused mandate set." />
        <div className="border-t border-[var(--ink)]">
          {items.map((it, i) => (
            <div
              key={i}
              className="grid md:grid-cols-12 gap-6 py-10 border-b border-[var(--rule)] group"
            >
              <div className="md:col-span-1 font-serif text-[var(--bronze)] text-sm tracking-widest pt-1">
                0{i + 1}
              </div>
              <h3 className="md:col-span-5 font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug">
                {it.t}
              </h3>
              <p className="md:col-span-6 text-[var(--ink-soft)] leading-relaxed md:pt-2">
                {it.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Geographies() {
  const regions = [
    {
      t: "Europe",
      tag: "Primary market",
      b: "Cross-border mandates across Western and Southern Europe with emphasis on Italy, France, Germany, Luxembourg, Greece, and the UK.",
    },
    {
      t: "MENA",
      tag: "Active coverage",
      b: "Gulf family offices, sovereign-adjacent capital, and emerging market mandates.",
    },
    {
      t: "North America",
      tag: "Selective",
      b: "Cross-border engagements with institutional allocators and acquisition entrepreneurs.",
    },
  ];
  return (
    <section
      id="geographies"
      className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Geographies" title="Where we operate." />
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {regions.map((r) => (
            <div key={r.t}>
              <div className="h-px w-12 bg-[var(--bronze)] mb-8" />
              <h3 className="font-serif text-3xl text-[var(--ink)] mb-2">{r.t}</h3>
              <p className="eyebrow mb-6">{r.tag}</p>
              <p className="text-[var(--ink-soft)] leading-relaxed text-sm">{r.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ m }: { m: (typeof TEAM)[number] }) {
  return (
    <div className="text-center px-4">
      <div className="mx-auto w-32 h-32 rounded-full bg-[var(--ink)] text-[oklch(0.95_0.008_85)] flex items-center justify-center font-serif text-2xl tracking-wider border border-[var(--bronze)]/40 mb-6">
        {m.initials}
      </div>
      <h3 className="font-serif text-xl text-[var(--ink)] mb-1">{m.name}</h3>
      <p className="text-sm text-[var(--ink-soft)] leading-snug max-w-xs mx-auto">{m.title}</p>
      {m.sub && (
        <p className="text-xs text-[var(--ink-soft)]/80 mt-2 italic max-w-xs mx-auto">{m.sub}</p>
      )}
      {m.linkedin && (
        <a
          href={m.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
        >
          LinkedIn →
        </a>
      )}
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Team" title="Senior-led, by design." />
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {TEAM.slice(0, 3).map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {TEAM.slice(3).map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
        <p className="text-center font-serif text-xl md:text-2xl text-[var(--ink)] italic mt-20">
          “All engagements are senior-led. No junior handoffs.”
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-[var(--ink)] text-[oklch(0.95_0.008_85)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Let’s talk.</h2>
          <p className="mt-6 text-lg text-[oklch(0.82_0.01_85)] font-light leading-relaxed">
            If you are active in private markets — on the buy side, sell side, or advising
            founders and managers — we are always open to a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Email</p>
              <a
                href="mailto:contact@ravencourtcapital.com"
                className="text-lg hover:text-[var(--bronze)] transition-colors"
              >
                contact@ravencourtcapital.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Telephone</p>
              <a
                href="tel:+393896497363"
                className="text-lg hover:text-[var(--bronze)] transition-colors"
              >
                +39 389 649 7363
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Office</p>
              <p className="text-lg">Milan, Italy</p>
            </div>
            <div className="pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-[var(--bronze)] text-[var(--bronze)] px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Email</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-3 border border-[var(--bronze)] text-[var(--bronze)] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors disabled:opacity-60"
            >
              {sent ? "Thank you" : "Send message"}
              {!sent && <span aria-hidden>→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t border-[oklch(0.3_0.02_250)] py-8 text-[oklch(0.7_0.01_85)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wide">
        <p>Ravencourt Capital © 2025</p>
        <p>P.IVA 11381320966</p>
        <p>Milan, Italy</p>
      </div>
    </footer>
  );
}

function RavencourtPage() {
  return (
    <div className="bg-background text-[var(--ink)]">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Approach />
        <Services />
        <Geographies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
