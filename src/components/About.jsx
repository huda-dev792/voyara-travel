import { Compass, Mountain, Heart, ShieldCheck } from "lucide-react";

function About() {
  return (
    <section id="about" className="bg-[#10251F] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="https://hassansabirblog.wordpress.com/wp-content/uploads/2018/10/8461359074_44ca5a911b_b.jpg"
            alt="Beautiful mountains of Northern Pakistan"
            className="h-[350px] w-full rounded-2xl object-cover md:h-[500px]"
          />

          <div className="absolute -bottom-5 right-4 rounded-xl border border-gold/30 bg-[#17352B] px-6 py-4 shadow-xl md:right-8">
            <p className="text-2xl font-bold text-gold">Explore</p>
            <p className="text-sm text-gray-300">Northern Pakistan</p>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4 md:pt-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            About Voyara
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Travel Beyond <span className="text-gold">Ordinary.</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            At Voyara Travel, we believe every journey should become
            a beautiful memory. We help travelers discover the
            breathtaking mountains, peaceful valleys, and hidden
            gems of Northern Pakistan.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            From the majestic peaks of Hunza to the stunning
            landscapes of Skardu, our goal is to make your next
            adventure memorable, comfortable, and full of discovery.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="flex items-start gap-3">
              <Mountain className="mt-1 shrink-0 text-gold" size={25} />
              <div>
                <h3 className="font-semibold text-white">
                  Amazing Destinations
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Discover nature's finest views.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="mt-1 shrink-0 text-gold" size={25} />
              <div>
                <h3 className="font-semibold text-white">
                  Memorable Journeys
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Make every moment count.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-gold" size={25} />
              <div>
                <h3 className="font-semibold text-white">
                  Travel With Care
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Your comfort matters to us.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Compass className="mt-1 shrink-0 text-gold" size={25} />
              <div>
                <h3 className="font-semibold text-white">
                  New Adventures
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Find your next favourite place.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;