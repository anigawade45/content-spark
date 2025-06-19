import React from "react";
import Marquee from "react-fast-marquee";
import { SectionBackground } from "../Global/SectionBackground";

const clients = [
  { name: "RIGI", logo: "images/rigi.png" },
  { name: "hubble", logo: "images/hubble.png" },
  { name: "finvasia", logo: "images/finvasia.png" },
  { name: "bullsmart", logo: "images/bullsmart.png" },
  { name: "5paisa", logo: "images/5paisa.png" },
  { name: "HappyCredit", logo: "images/happycredit.png" },
  { name: "IIFL", logo: "images/iifl.png" },
  { name: "knowello", logo: "images/knowello.png" },
  { name: "Startup Maharashtra", logo: "images/startupmaharashtra.png" },
  { name: "Fivestera", logo: "images/fivestera.png" },
  { name: "Choice", logo: "images/choice.png" },
  { name: "Financial Adda", logo: "images/financialadda.png" },
];

export const ClientLogosScroller = () => {
  return (
    <section className="relative py-12 w-full overflow-hidden">
      <SectionBackground opacity="0" animate={false} />

      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
          Brands That Trust Us
        </h2>
        <div className="relative">
          {/* Gradient Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#18181b] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#18181b] to-transparent z-10" />
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="flex gap-x-8 py-4 px-2 relative z-0"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-4 h-24 min-w-[140px]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain mx-auto logo-glow-white"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
