import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StatsOverviewBar = ({ stats, className }) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-8 py-8", className)}>
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-xl px-8 py-6 border border-white/10 text-center min-w-[180px]"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-[#b370f1] to-[#4ee1a0] bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="text-white/70 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes as we create more pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
