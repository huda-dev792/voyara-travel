import {
  Compass,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#10251F] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a
              href="/voyara-travel/"
              className="flex items-center gap-2 text-3xl font-bold text-gold"
            >
              <Compass size={30} />
              Voyara<span>.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Travel Beyond Ordinary. Discover the breathtaking
              mountains, peaceful valleys, and hidden gems of
              Northern Pakistan with Voyara.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="/voyara-travel/" className="hover:text-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/voyara-travel/#about" className="hover:text-gold transition">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/voyara-travel/#destinations"
                  className="hover:text-gold transition"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a href="/voyara-travel/#contact" className="hover:text-gold transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gold">
              Popular Destinations
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "Hunza Valley",
                "Skardu",
                "Fairy Meadows",
                "Swat & Kalam",
                "Naran & Kaghan",
                "Azad Kashmir",
              ].map((place) => (
                <li key={place}>
                  <a
                    href={`/voyara-travel/#destinations`}
                    className="hover:text-gold transition"
                  >
                    {place}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gold">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <p className="flex items-start gap-3">
                <MapPin size={19} className="shrink-0 text-gold" />
                Northern Pakistan
              </p>

              <a
                href="/voyara-travel/#contact"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Phone size={18} className="text-gold" />
                Contact Our Team
              </a>

              <a
                href="/voyara-travel/#contact"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Mail size={18} className="text-gold" />
                Send Us a Message
              </a>
            </div>

            <a
              href="/voyara-travel/#destinations"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#10251F] hover:opacity-90 transition"
            >
              Explore Tours <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Voyara Travel. All rights reserved.
          </p>

          <p>Made with care for your next adventure.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;