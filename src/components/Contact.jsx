import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "923001234567"; // Apna actual WhatsApp number lagana

    const text = `Hello Voyara Travel!
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-[#10251F] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Let's Plan Your <span className="text-gold">Next Journey</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Have questions about our tours? Send us a message and
            let's start planning your next adventure.
          </p>
        </div>

        <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#17352B] p-6 md:grid-cols-2 md:p-10">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              We're here to help you discover the beauty of Northern Pakistan.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" size={23} />
                <div>
                  <h4 className="font-semibold text-white">Our Destination</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    Northern Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-gold" size={23} />
                <div>
                  <h4 className="font-semibold text-white">Phone / WhatsApp</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    Message us through the contact form
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0 text-gold" size={23} />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    Send your enquiry using the form
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-200">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-[#10251F] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-[#10251F] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-200">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell us about your trip..."
                className="w-full resize-y rounded-lg border border-white/10 bg-[#10251F] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-[#10251F] transition hover:opacity-90"
            >
              Send via WhatsApp <Send size={18} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;