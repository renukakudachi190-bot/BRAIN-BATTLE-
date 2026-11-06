import { eventConfig } from "@/lib/event-config";

export default function RegisterCTA() {
  return (
    <section id="register" className="section-padding border-t border-slate-800/50">
      <div className="container-narrow">
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0C0C14] to-purple-500/10 p-10 sm:p-14 text-center">
          {/* Glow blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-4">
              Limited Seats
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Battle?
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
              Secure your spot for The Brain Battle. Registration is free and takes less than a minute.
            </p>

            <a
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-4 glow-cyan inline-flex"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Register via Google Form
            </a>

            <p className="mt-6 text-sm text-slate-500">
              You will be redirected to our official Google Form to complete registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
