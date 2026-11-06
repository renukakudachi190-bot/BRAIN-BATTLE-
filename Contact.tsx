import { eventConfig } from "@/lib/event-config";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-slate-800/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-medium text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Contact Us
          </h2>
          <p className="text-slate-400 mt-3">{eventConfig.contact.message}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a
            href={`mailto:${eventConfig.contact.email}`}
            className="card p-6 text-center group hover:border-cyan-500/40"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/25 transition-colors">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-slate-400 mb-1">Email</p>
            <p className="text-white font-medium break-all">{eventConfig.contact.email}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${eventConfig.contact.phone.replace(/\s/g, "")}`}
            className="card p-6 text-center group hover:border-cyan-500/40"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/25 transition-colors">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-sm text-slate-400 mb-1">Phone</p>
            <p className="text-white font-medium">{eventConfig.contact.phone}</p>
          </a>

          {/* Venue */}
          <div className="card p-6 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/15 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-sm text-slate-400 mb-1">Venue</p>
            <p className="text-white font-medium">{eventConfig.venueFull}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
