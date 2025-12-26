import type { ReactNode } from "react";
import Image from "next/image";
import {
  Apple,
  Gift,
  GooglePlay,
  Instagram,
  Youtube,
} from "iconsax-reactjs";
import HeroReel from "./components/HeroReel";
import ReelVideoCard from "./components/ReelVideoCard";

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.367-1.85 3.6 0 4.264 2.37 4.264 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const testimonialVideos = [
  { src: "/Video-244.mp4", ariaLabel: "Commute video 1" },
  { src: "/Video-290.mp4", ariaLabel: "Commute video 2" },
  { src: "/Video-432.mp4", ariaLabel: "Commute video 3" },
  { src: "/Video-763.mp4", ariaLabel: "Commute video 4" },
  { src: "/Video-974.mp4", ariaLabel: "Commute video 5" },
] as const;

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
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
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur transition dark:border-white/10 dark:bg-white/5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-black/5 transition group-hover:opacity-100 dark:ring-white/10" />
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/70 text-zinc-950 shadow-sm transition group-hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:group-hover:bg-white/10">
            {icon}
          </div>
        ) : null}
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
      </div>
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
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-zinc-200/70 via-white to-zinc-200/70 blur-3xl dark:from-white/10 dark:via-white/5 dark:to-white/10" />
            <div className="absolute -bottom-44 right-[-120px] h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-zinc-200/70 via-white to-zinc-200/70 blur-3xl dark:from-white/10 dark:via-white/5 dark:to-white/10" />
          </div>

          <Container>
            <div className="grid gap-10 pb-14 pt-8 sm:gap-12 sm:pb-20 sm:pt-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3">
                  <Image
                    src="/app_icon.png"
                    alt="Go Extra Mile"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                  <p className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    Go Extra Mile
                  </p>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
                  Built for India&apos;s daily commuters.
                </h1>
                <p className="mt-3 max-w-prose text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                  Log your daily bike or car commute. Build consistency. Unlock benefits over time.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton href="#download">Download Now</PrimaryButton>
                  <SecondaryButton href="#how-it-works">
                    See how it works
                  </SecondaryButton>
                </div>
              </div>

              <div className="md:col-span-5 md:justify-self-end">
                <HeroReel />
              </div>
            </div>
          </Container>
        </section>

        <section id="how-it-works" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Simple. Easy. Effortless."
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Start Commute"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    navigation
                  </span>
                }
              >
                Tap once to start logging your daily commute.
              </Card>
              <Card
                title="Complete Commute"
                icon={<Gift size={22} variant="Bold" />}
              >
                End your commute when you arrive. Distance and time are recorded automatically.
              </Card>
              <Card
                title="Build Streak"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    mode_heat
                  </span>
                }
              >
                Log your commute daily to build a streak. Consistency unlocks benefits over time.
              </Card>
            </div>
          </Container>
        </section>

        <section id="benefits" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why use Go Extra Mile?"
              title="Designed for daily commuters."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card
                title="Daily Routine"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    calendar_today
                  </span>
                }
              >
                Log the commute you already do every day. No extra effort. No lifestyle change.
              </Card>
              <Card
                title="One-Tap Logging"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    touch_app
                  </span>
                }
              >
                Start and end your commute in seconds.
              </Card>
              <Card
                title="Build Consistency"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    trending_up
                  </span>
                }
              >
                Daily commutes help you build long-term streaks.
              </Card>
              <Card
                title="Real benefits"
                icon={
                  <span
                    className="material-symbols-rounded text-[22px] leading-none"
                    aria-hidden="true"
                  >
                    redeem
                  </span>
                }
              >
                Use earned GEM coins for fuel, services, and partner offers.
              </Card>
            </div>
          </Container>
        </section>

        <section id="who-its-for" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Who it’s for"
              title="Made for people who commute every day"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Perfect for
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  <li>College students</li>
                  <li>Office commuters</li>
                  <li>Bike and car owners</li>
                  <li>Delivery &amp; field professionals</li>
                  <li>Anyone who commutes regularly</li>
                </ul>
                <p className="mt-4 text-pretty">If you commute occasionally, it still works.</p> 
                <p>If you commute daily, it fits naturally into your life.</p>
              </div>

              <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Our vision
                </h3>
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Daily commuting is already part of life. It takes time, effort, and consistency. We believe that showing up every day matters and that everyday effort deserves recognition.
                </p>
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Go Extra Mile exists to make daily commuting feel worth it. Because consistency deserves more than silence.
                </p>
                <div className="mt-6">
                  <SecondaryButton href="#download">Get started today</SecondaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>


        <section id="testimonials" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Community"
              title="Commutes that feel worth it"
            />

            <div className="mt-12 overflow-hidden">
              <div className="flex w-max gap-6 testimonials-scroll hover:[animation-play-state:paused]">
                {[...testimonialVideos, ...testimonialVideos].map((video, index) => (
                  <div
                    key={`${video.src}-${index}`}
                    className="group relative w-56 flex-none overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:w-64 md:w-72"
                  >
                    <a
                      href="https://www.instagram.com/goextramileapp/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Instagram"
                      className="absolute bottom-4 left-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-zinc-950 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-zinc-50 dark:hover:bg-white/15"
                    >
                      <Instagram size={20} variant="Bold" />
                    </a>

                    <ReelVideoCard src={video.src} ariaLabel={video.ariaLabel} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>



        <section id="community" className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Join India&apos;s commuter community"
              title="Follow Go Extra Mile"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
             
             
              <Card title="Instagram" icon={<Instagram size={22} variant="Bold" />}>
                <a
                  href="https://www.instagram.com/goextramileapp/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="Instagram"
                >
                  Follow on Instagram
                </a>
              </Card>
              
              <Card title="YouTube" icon={<Youtube size={22} variant="Bold" />}>
                <a
                  href="https://www.youtube.com/@GoExtraMileApp"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="YouTube"
                >
                  Subscribe on YouTube
                </a>
              </Card>
            
              <Card title="LinkedIn" icon={<LinkedInIcon size={22} />}>
                <a
                  href="https://www.linkedin.com/company/goextramileapp/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
                  aria-label="LinkedIn"
                >
                  Connect on LinkedIn
                </a>
              </Card>
              
            
            
            </div>
          </Container>
        </section>



        <section id="download" className="py-16 sm:py-24">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-zinc-950 px-6 py-12 text-white shadow-sm dark:border-white/10 dark:bg-white/5 sm:px-8 sm:py-14">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative">
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Download Go Extra Mile
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/80">
                  Available on Android and iOS
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://apps.apple.com/in/app/go-extra-mile/id6499072540"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-zinc-100"
                  >
                    <Apple size={18} variant="Bold" />
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.goeleventhmile&pcampaignid=web_share"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10"
                  >
                    <GooglePlay size={18} variant="Bold" />
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
              Go Extra Mile - Log every commute © 2025.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              <a className="hover:text-zinc-950 dark:hover:text-white" href="/about">
                About
              </a>
              <a className="hover:text-zinc-950 dark:hover:text-white" href="/terms-privacy">
                Terms &amp; Privacy
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
