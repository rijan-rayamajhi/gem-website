export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        About
      </h1>

      <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        At Go Extra Mile, we believe that every journey deserves to be rewarded. Our app
        turns every kilometer you ride into GEM Coins, which can be redeemed for cash
        or exclusive products. Whether you’re biking, commuting, or traveling, we make
        sure your efforts count.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Who We Are
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        We’re a passionate team of travel enthusiasts, committed to making your daily
        rides and adventures more rewarding. Since launching, our community has
        traveled over 555,000 kilometers, referred 4,000+ users, and completed 17,000
        rides on the platform.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Kilometers traveled</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            555,000+
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Users referred</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            4,000+
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Rides completed</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            17,000+
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Recognizing Excellence
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Each year, we celebrate our top performers with special awards:
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        <li>
          <span className="font-medium text-zinc-950 dark:text-zinc-50">
            Rider of the Month &amp; Rider of the Year
          </span>
          {" "}
          – for users who travel the most kilometers.
        </li>
        <li>
          <span className="font-medium text-zinc-950 dark:text-zinc-50">
            Active Rider of the Month &amp; Active Rider of the Year
          </span>
          {" "}
          – for users who complete the most rides.
        </li>
        <li>
          <span className="font-medium text-zinc-950 dark:text-zinc-50">
            Influencer of the Month &amp; Influencer of the Year
          </span>
          {" "}
          – for users who refer the most people to the app.
        </li>
      </ul>

      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Winners receive trophies in recognition of their achievements.
      </p>

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Previous event
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Watch our previous event here:{" "}
        <a
          href="https://youtu.be/aiRqYBVG2Fk?si=Blb2UTPpISVcDMBV"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-zinc-950 underline underline-offset-4 hover:opacity-80 dark:text-zinc-50"
        >
          https://youtu.be/aiRqYBVG2Fk
        </a>
        .
      </p>

      <div className="mt-6 overflow-hidden rounded-3xl border border-black/5 bg-black shadow-sm dark:border-white/10">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/aiRqYBVG2Fk"
            title="Go Extra Mile event"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
