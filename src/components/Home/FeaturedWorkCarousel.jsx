import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaInstagram,
  FaPlay,
  FaArrowRight,
  FaHeart,
  FaComment,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { SectionBackground } from "../Global/SectionBackground";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const FeaturedWorkCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    // Simulate loading state for reels
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const projects = [
    {
      title: "Brand Transformation",
      client: "TechCorp",
      description:
        "Complete content strategy and execution that increased engagement by 300%",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["Strategy", "Content Creation", "Social Media"],
    },
    {
      title: "Viral Campaign",
      client: "EcoLife",
      description: "Environmental awareness campaign that reached 5M+ views",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      tags: ["Video Production", "Social Media", "Campaign"],
    },
    {
      title: "Content Series",
      client: "HealthPlus",
      description:
        "Educational content series that established thought leadership",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tags: ["Content Strategy", "Blog", "SEO"],
    },
  ];

  const reels = [
    {
      id: "C89c6mYybBZ",
      title: "Behind the Scenes",
      views: "12k views",
      url: "https://www.instagram.com/p/C89c6mYybBZ/",
      likes: "43",
      comments: "4",
      thumbnail: "/src/assets/reel1.png"
    },
    {
      id: "CnwbrTMNGzp",
      title: "Creative Process",
      views: "12.9K views",
      url: "https://www.instagram.com/reel/CnwbrTMNGzp/",
      likes: "32",
      comments: "4",
      thumbnail: "/src/assets/reel2.png"
    },
    {
      id: "C3nAI9fvIw7",
      title: "Client Success",
      views: "262K views",
      url: "https://www.instagram.com/p/C3nAI9fvIw7/",
      likes: "2.7K",
      comments: "48",
      thumbnail: "/src/assets/reel3.png"
    },
    {
      id: "CnoyllQLv5i",
      title: "Team Culture",
      views: "20k views",
      url: "https://www.instagram.com/p/CnoyllQLv5i/",
      likes: "1884",
      comments: "12",
      thumbnail: "/src/assets/reel4.png"
    },
  ];

  return (
    <section className="relative py-24 w-full overflow-hidden">
      <SectionBackground gradientFrom="[#b370f1]" gradientTo="[#4ee1a0]" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mt-6 bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#ffffff] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] tracking-wide px-4 py-2">
            Discover how we've helped brands achieve their content marketing
            goals
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Vibrant Gradient border/glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#4ee1a0] rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:duration-200 z-10" />

              <Card className="relative h-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-[#b370f1]/20 overflow-hidden z-20">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-[#b370f1] font-medium">
                        {project.client}
                      </p>
                    </div>
                    <p className="text-white/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-[#b370f1]/10 text-[#b370f1] group-hover:bg-[#b370f1]/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-4 px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-3 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400 text-white shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(179,112,241,0.4)] focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 animate-pulse-slow group-hover:gap-4"
                    >
                      View Case Study
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Instagram Reels Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#b370f1] to-[#ffd93d] bg-clip-text text-transparent">
            Latest on Instagram
          </h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            className="pb-8"
          >
            {reels.map((reel, index) => (
              <SwiperSlide key={reel.id}>
                <motion.div
                  className="relative group aspect-[9/16] h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Vibrant Gradient border/glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#b370f1] via-[#ffd93d] to-[#4ee1a0] rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:duration-200 z-10" />
                  <div className="relative h-full w-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden z-20 flex flex-col">
                    {/* Play Overlay */}
                    <a href={reel.url} target="_blank" rel="noopener noreferrer" className="relative block h-2/3 w-full group">
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div
                          className="bg-white/20 rounded-full p-4 backdrop-blur-md shadow-lg"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <FaPlay className="text-3xl text-[#b370f1] animate-pulse" />
                        </motion.div>
                      </div>
                      <img
                        src={reel.thumbnail || '/src/assets/placeholder.jpg'}
                        alt={reel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </a>
                    {/* Animated Metrics */}
                    <div className="flex justify-between items-center gap-2 px-4 py-3 mt-auto z-30">
                      <div className="flex items-center gap-2 text-white/80">
                        <FaHeart className="text-[#b370f1] animate-pulse" />
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>{reel.likes}</motion.span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <FaComment className="text-[#ffd93d] animate-pulse" />
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>{reel.comments}</motion.span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <FaInstagram className="text-[#4ee1a0] animate-pulse" />
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{reel.views}</motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up">
          <button
            className="
            relative group
            px-8 py-4 rounded-xl
            bg-gradient-to-r from-[#b370f1] to-[#ffd93d]
            text-white font-medium
            transition-all duration-300
            hover:shadow-lg hover:shadow-[#b370f1]/20
            hover:-translate-y-0.5
            focus:outline-none focus:ring-2 focus:ring-[#b370f1] focus:ring-offset-2 focus:ring-offset-[#18181b]
          "
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ffd93d] to-[#b370f1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
