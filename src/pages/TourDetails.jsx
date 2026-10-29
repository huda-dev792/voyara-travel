import {useState} from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Send } from 'lucide-react'

const tourData = {
    "Hunza Valley": { 
        location: "Gilgit-Baltistan, Pakistan",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Hunza Valley is a mountainous valley located in the Gilgit-Baltistan region of Pakistan. It is known for its stunning landscapes, including snow-capped peaks, lush green valleys, and beautiful rivers. The valley is home to the Hunza people, who have a rich cultural heritage and are known for their hospitality.",
    },
     "Skardu": { 
        location: "Gilgit-Baltistan, Pakistan",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
        description: "Skardu is a city in the Gilgit-Baltistan region of Pakistan. It is known for its stunning landscapes, including snow-capped peaks, lush green valleys, and beautiful rivers. The city is home to the Skardu people, who have a rich cultural heritage and are known for their hospitality.",
    },
     "Sawat & Kalam": { 
        location: "Khyber Pakhtunkhwa, Pakistan",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80",
        description: "Sawat & Kalam is a region in the Gilgit-Baltistan province of Pakistan, known for its breathtaking natural beauty and rich cultural heritage.",
    },
     "Fairy Meadows": { 
        location: "Gilgit-Baltistan, Pakistan",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80",
        description: "Fairy Meadows is a high-altitude meadow located in the Gilgit-Baltistan region of Pakistan. It is known for its stunning landscapes, including snow-capped peaks, lush green valleys, and beautiful rivers. The area is home to diverse flora and fauna.",
    },
     "Naran & Kaghan": { 
        location: "Khyber Pakhtunkhwa, Pakistan",
        image: "https://images.unsplash.com/photo-1722599504918-a7e94343184a?auto=format&fit=crop&fm=jpg&q=80&w=1200",
        description: "Naran & Kaghan is a region in the Gilgit-Baltistan province of Pakistan, known for its breathtaking natural beauty and rich cultural heritage.",
    },
     "Azad Kashmir": { 
        location: "Azad Kashmir, Pakistan",
        image: "https://images.unsplash.com/photo-1728137490905-281e8c23712f?auto=format&fit=crop&fm=jpg&q=80&w=1200",
        description: "Azad Kashmir is a region in the northern part of Pakistan, known for its stunning natural beauty and rich cultural heritage.",
    },
};

export default function TourDetails() {
    const [searchParams] = useSearchParams();
    const requestedDestination = searchParams.get("destination");
    const destination = tourData[requestedDestination] ? requestedDestination : "Hunza Valley";
    const tour = tourData[destination];

    
  const [transport, setTransport] = useState("Private car");
  const [hotel, setHotel] = useState("Standard hotel");
  const [meals, setMeals] = useState(true);
  const [guide, setGuide] = useState(true);
  const [photographer, setPhotographer] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSubmit(event) {
    event.preventDefault();

    const message = `Voyara Travel Trip Request
Destination: ${destination}
Name: ${name}
Phone: ${phone}
Travel date: ${date}
Guests: ${guests}
Transport: ${transport}
Hotel: ${hotel}
Meals: ${meals ? "Yes" : "No"}
Local guide: ${guide ? "Yes" : "No"}
Photographer: ${photographer ? "Yes" : "No"}`;

    // Replace this placeholder with the agency's real WhatsApp number.
    const agencyNumber = "923001234567";

    window.open(
      `https://wa.me/${agencyNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-white/15 bg-[#18394D] px-4 py-3 text-white outline-none focus:border-[#F4BD55]";

  return (
    <main className="min-h-screen bg-[#102B3F] text-[#F5F1E8]">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-10">
        <Link to="/" className="text-2xl font-bold">
          Voyara<span className="text-[#F4BD55]">.</span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-[#F4BD55]"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-10 lg:grid-cols-2">
        <div>
          <div className="relative h-[300px] overflow-hidden rounded-3xl sm:h-[430px]">
            <img
              src={tour.image}
              alt={destination}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="mb-2 flex items-center gap-2 text-sm text-[#F4BD55]">
                <MapPin size={16} />
                {tour.location}
              </p>
              <h1 className="text-3xl font-bold sm:text-5xl">
                {destination}
              </h1>
            </div>
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#F4BD55]">
            Your next adventure
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Customize Your Trip
          </h2>

          <p className="mt-3 leading-7 text-white/70">
            {tour.description} Choose your preferred travel options and
            send your trip request to our team.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#153449] p-5 sm:p-8"
        >
          <h2 className="text-2xl font-bold">Plan Your Journey</h2>
          <p className="mt-2 text-sm text-white/60">
            Select your preferences below.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm">Transport</label>
              <select
                className={fieldClass}
                value={transport}
                onChange={(event) => setTransport(event.target.value)}
              >
                <option>Private car</option>
                <option>4x4 vehicle</option>
                <option>Shared transport</option>
                <option>Own transport</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm">Accommodation</label>
              <select
                className={fieldClass}
                value={hotel}
                onChange={(event) => setHotel(event.target.value)}
              >
                <option>Standard hotel</option>
                <option>Luxury hotel</option>
                <option>Resort</option>
                <option>Camping</option>
              </select>
            </div>

            <div>
              <p className="mb-3 text-sm">Extra services</p>

              {[
                ["Meals", meals, setMeals],
                ["Local guide", guide, setGuide],
                ["DSLR photographer", photographer, setPhotographer],
              ].map(([label, checked, setChecked]) => (
                <label
                  key={label}
                  className="mb-3 flex cursor-pointer items-center justify-between rounded-xl border border-white/10 p-4"
                >
                  <span>{label}</span>
                   <span>{label}</span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    className="h-4 w-4 accent-[#F4BD55]"
                  />
                </label>
              ))}
            </div>

            <div className="border-t border-white/10 pt-5">
              <h3 className="mb-4 text-lg font-semibold">Your details</h3>

              <div className="space-y-4">
                <input
                  className={fieldClass}
                  placeholder="Full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />

                <input
                  className={fieldClass}
                  type="tel"
                  placeholder="Phone / WhatsApp number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />

                <div>
                  <label className="mb-2 block text-sm">Travel date</label>
                  <input
                    className={fieldClass}
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm">Number of guests</label>
                  <select
                    className={fieldClass}
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                  >
                    {Array.from({ length: 20 }, (_, index) => index + 1).map(
                      (number) => (
                        <option key={number} value={number}>
                          {number} {number === 1 ? "guest" : "guests"}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F4BD55] px-5 py-4 font-bold text-[#102B3F] transition hover:bg-[#ffd37b]"
            >
              <Send size={17} />
              Send Trip Request
            </button>

            <p className="text-center text-xs leading-5 text-white/50">
              Your request opens in WhatsApp. The trip is not confirmed
              until the agency responds.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}