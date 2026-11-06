import { eventConfig } from "@/lib/event-config";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-[#08080F]">
      <div className="container-narrow px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-slate-950 font-bold font-heading text-sm">
                B
              </div>
              <span className="font-heading font-bold text-white">
                {eventConfig.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {eventConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-slate-400 hover:text-cyan-300 transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href={eventConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{eventConfig.organizerName}</li>
              <li>
                <a
                  href={`mailto:${eventConfig.organizerEmail}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {eventConfig.organizerEmail}
                </a>
              </li>
              <li>{eventConfig.organizerPhone}</li>
              {eventConfig.social.instagram && (
                <li className="pt-2">
                  <a
                    href={eventConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {eventConfig.name}. Organized by{" "}
          {eventConfig.organizerName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
