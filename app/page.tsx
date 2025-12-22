import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
  );
}

function SectionHeading({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur transition dark:border-white/10 dark:bg-white/5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-black/5 transition group-hover:opacity-100 dark:ring-white/10" />
      <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        {title}
      </h3>
      <div className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-zinc-50 dark:from-black dark:via-black dark:to-zinc-950">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-2 font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-semibold text-white shadow-sm dark:bg-zinc-50 dark:text-zinc-950">
                GEM
              </span>
              <span className="hidden sm:inline">Go Extra Mile</span>
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#how-it-works">
                How it works
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#benefits">
                Benefits
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#community">
                Community
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#download"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white sm:inline-flex"
              >
                Download
              </a>
              <PrimaryButton href="#download">Start earning</PrimaryButton>
            </div>
          </div>
        </Container>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-zinc-200/70 via-white to-zinc-200/70 blur-3xl dark:from-white/10 dark:via-white/5 dark:to-white/10" />
            <div className="absolute -bottom-44 right-[-120px] h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-zinc-200/70 via-white to-zinc-200/70 blur-3xl dark:from-white/10 dark:via-white/5 dark:to-white/10" />
          </div>

          <Container>
            <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  India’s first rewards-based mobility app
                </div>

                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                  Turn Every Ride Into Real Rewards
                </h1>
                <p className="mt-5 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
                  Make your daily commute pay you back.
                </p>
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Earn rewards for every kilometer you ride, travel, or commute —
                  effortlessly and in seconds.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton href="#download">Download Now</PrimaryButton>
                  <SecondaryButton href="#how-it-works">
                    See how it works
                  </SecondaryButton>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      Earn
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      GEM Coins
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      Track
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      Every ride
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      Redeem
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      Real perks
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    What is Go Extra Mile?
                  </p>
                  <p className="mt-3 text-pretty text-lg leading-8 text-zinc-950 dark:text-zinc-50">
                    Go Extra Mile is India’s first <span className="font-semibold">rewards-based mobility app</span> designed to make every trip count.
                  </p>
                  <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Whether you’re a daily commuter, biker, traveler, or rideshare driver — Go Extra Mile lets you earn valuable rewards simply by riding.
                  </p>
                  <div className="mt-6 rounded-2xl bg-zinc-950 px-5 py-4 text-white shadow-sm dark:bg-zinc-50 dark:text-zinc-950">
                    <p className="text-sm font-medium opacity-90">In one line</p>
                    <p className="mt-1 text-base font-semibold">
                      Rewarding every kilometer you travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Start riding. Start earning."
              description="Earn rewards for every kilometer you ride, travel, or commute — effortlessly and in seconds."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              <Card title="1. Start a Ride">
                Tap <span className="font-semibold">Ride & Earn</span> to begin tracking.
              </Card>
              <Card title="2. Complete Your Trip">
                Finish and save your ride details.
              </Card>
              <Card title="3. Earn GEM Coins">
                Get rewarded for the distance you travel.
              </Card>
              <Card title="4. Redeem Rewards">
                Use GEM Coins for cashback, discounts, coupons, events, and more.
              </Card>
            </div>
          </Container>
        </section>

        <section id="benefits" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why use Go Extra Mile?"
              title="Premium rewards — built for everyday mobility"
              description="Everything you need to track rides and unlock meaningful benefits — all in one clean experience."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card title="Earn While You Travel">
                Get rewards for miles you already ride.
              </Card>
              <Card title="Simple & User-Friendly">
                Clean interface for quick starts and easy tracking.
              </Card>
              <Card title="Valuable Benefits">
                Redeem coins for offers, deals, and exclusive perks.
              </Card>
              <Card title="Track Your Journey">
                View past rides and reward history in one place.
              </Card>
            </div>
          </Container>
        </section>

        <section id="who-its-for" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Who it’s for"
              title="Made for anyone who moves"
              description="This app is perfect for commuters, drivers, and explorers who want more value from everyday miles."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Perfect for
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  <li>Daily commuters & bikers</li>
                  <li>Travelers & road explorers</li>
                  <li>Rideshare drivers & delivery partners</li>
                  <li>Anyone who wants to get more value from everyday miles</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Mission
                </h3>
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  We believe mobility should be <span className="font-semibold">rewarding and purposeful</span> — not just movement. Our mission is to empower commuters with incentives for every ride they take.
                </p>
                <div className="mt-6">
                  <SecondaryButton href="#download">Get started today</SecondaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="community" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Join the community"
              title="Follow Go Extra Mile"
              description="Follow us for updates, reward campaigns, and travel inspiration."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card title="Instagram">
                <a
                  href="#"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="Instagram"
                >
                  Follow on Instagram
                </a>
              </Card>
              <Card title="WhatsApp">
                <a
                  href="#"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="WhatsApp"
                >
                  Join on WhatsApp
                </a>
              </Card>
              <Card title="YouTube">
                <a
                  href="#"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="YouTube"
                >
                  Subscribe on YouTube
                </a>
              </Card>
            </div>
          </Container>
        </section>

        <section id="testimonials" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Testimonials"
              title="Commutes that feel worth it"
              description="A simple experience that turns everyday rides into rewards."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  “I never knew my commute could give me rewards — now every ride feels worth it!”
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  Sample user
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  “Clean UI and fast tracking — love the simple experience.”
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  Sample user
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="download" className="py-16 sm:py-24">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-950 px-8 py-14 text-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Download now and start earning from your very first ride
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80">
                  Available for iPhone and Android. Start earning rewards from the very first ride!
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-zinc-100"
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-black/5 py-10 dark:border-white/10">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Go Extra Mile — Rewarding Every Ride © 2025.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Terms
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Privacy
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="#">
                Support
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
