import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTrophy,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa6";
import { SectionBackground } from "../Global/SectionBackground";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const reasons = [
  {
    icon: FaTrophy,
    title: "Strategic Approach",
    description:
      "Data-driven strategies tailored to your specific goals and target audience.",
    gradient: "from-[#1a1a2e] to-[#b370f1]",
    iconColor: "text-[#b370f1]",
    shadowColor: "group-hover:shadow-[#b370f1]",
    features: [
      "Custom Strategy Development",
      "Market Analysis",
      "Performance Tracking",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Creative Excellence",
    description:
      "Award-winning creative team that brings fresh perspectives to every project.",
    gradient: "from-[#1a1a2e] to-[#ffd93d]",
    iconColor: "text-[#ffd93d]",
    shadowColor: "group-hover:shadow-[#ffd93d]",
    features: ["Innovative Solutions", "Design Thinking", "Brand Development"],
  },
  {
    icon: FaChartLine,
    title: "Proven Results",
    description:
      "Track record of delivering measurable ROI and business growth for our clients.",
    gradient: "from-[#1a1a2e] to-[#4ee1a0]",
    iconColor: "text-[#4ee1a0]",
    shadowColor: "group-hover:shadow-[#4ee1a0]",
    features: ["ROI Focused", "Data Analytics", "Growth Strategy"],
  },
  {
    icon: FaHandshake,
    title: "Dedicated Support",
    description:
      "Personal account managers and 24/7 support to ensure your success.",
    gradient: "from-[#1a1a2e] to-[#f07aa3]",
    iconColor: "text-[#f07aa3]",
    shadowColor: "group-hover:shadow-[#f07aa3]",
    features: ["24/7 Support", "Personal Account Manager", "Regular Updates"],
  },
];

export const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="relative py-24 w-full overflow-hidden">
      <SectionBackground opacity="0" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center mb-10 drop-shadow-[0_0_15px_rgba(179,112,241,0.5)]">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mt-6 bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#ffffff] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] tracking-wide px-4 py-2">
            We combine creativity with strategy to deliver exceptional results
            for your brand
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Gradient border/glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-b ${reason.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:duration-200`}
              />

              {/* Card Content */}
              <div
                className={`
                relative h-full 
                bg-[#1a1a2e]/80 backdrop-blur-xl
                rounded-2xl p-8
                border border-white/10
                transition-all duration-500 ease-out
                group-hover:scale-[1.02] group-hover:-translate-y-1
                group-hover:shadow-2xl ${reason.shadowColor}
              `}
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`
                    relative
                    w-16 h-16
                    flex items-center justify-center
                    rounded-2xl
                    ${reason.iconColor}
                    transition-all duration-500 ease-out
                    transform group-hover:scale-110 group-hover:rotate-6
                    ${reason.shadowColor}
                  `}
                    style={{
                      background: `radial-gradient(circle at center, ${reason.iconColor
                        .replace("text-[", "")
                        .replace("]", "")}22 0%, transparent 70%)`,
                      filter: `drop-shadow(0 0 8px ${reason.iconColor
                        .replace("text-[", "")
                        .replace("]", "")}66)`,
                    }}
                  >
                    {React.createElement(reason.icon, {
                      className:
                        "text-4xl transition-transform duration-500 ease-out",
                    })}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white text-center mb-4 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-white/80 text-center mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {reason.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-center space-x-2 text-white/90 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${reason.iconColor} animate-pulse`}
                      />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
