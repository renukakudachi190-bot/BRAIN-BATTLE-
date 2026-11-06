import { eventConfig } from "@/lib/event-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 section-padding text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {eventConfig.duration} • Live Event
        </div>

        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="block text-white">THE</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
            BRAIN BATTLE
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-4">
          {eventConfig.tagline}
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10">
          {eventConfig.shortDescription}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 text-sm sm:text-base">
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{eventConfig.displayDate}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{eventConfig.displayTime}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{eventConfig.venueFull}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={eventConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg px-10 py-4 glow-cyan"
          >
            Register Now — Free
          </a>
          <a href="#about" className="btn-secondary text-base sm:text-lg px-10 py-4">
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
