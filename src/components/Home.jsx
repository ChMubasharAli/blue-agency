"use client";

import {
  ChevronRight,
  Play,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import NavigationBar from "./Navbar";
import Testimonials from "./Testimonials";
import MovingCards from "./MovingCards";
import VideoCarousel from "./VideoCarousel";
import CardHoverEffect from "./CardHoverEffect";
import Image from "next/image";

export default function BlueAgencyLanding() {
  const services = [
    {
      title: "Video Ads",
      description:
        "Break through the noise with high-converting, scroll-stopping video ads. Designed to disrupt, crafted to convert, and made to put your brand in motion.",
      icon: "🎬",
    },
    {
      title: "Logo & Brand Identity",
      description:
        "Stand out with a brand look that speaks volumes. From bold logos to cohesive brand design, we bring your vision to life with personality and purpose.",
      icon: "✨",
    },
    {
      title: "Website Development",
      description:
        "Launch a custom, responsive website that's as functional as it is stunning. SEO-ready, mobile-optimized, and built to convert — all tailored to your business goals.",
      icon: "💻",
    },
    {
      title: "Digital Ad Campaigns",
      description:
        "No more wasted ad spend. We create strategic, high-impact ad campaigns paired with bold creative that grabs attention and turns clicks into customers.",
      icon: "📱",
    },
    {
      title: "Social Media Management",
      description:
        "Grow your online presence with strategic content, community engagement, and consistent brand storytelling across the platforms that matter most.",
      icon: "🚀",
    },
  ];

  const features = [
    "Custom Scripts & Storylines",
    "High-Quality Production",
    "Zero Time Commitment from You",
    "Proven Conversion Results",
  ];

  return (
    <div className="bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-normal">
              Engaging Video Ads That
              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Convert Real Leads
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              We don&apos;t just make videos — we craft high-performing content
              that grabs attention and converts real leads into loyal customers.
              From strategy to production, we handle everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition flex items-center gap-2"
              >
                Start Your Campaign
                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={20}
                />
              </a>
              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500/50 hover:bg-blue-900/30 transition flex items-center gap-2">
                <Play size={20} />
                Watch Showcase
              </button>
            </div>
          </div>

          {/* Video Showcase Grid */}
          <VideoCarousel />
          {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="aspect-9/16 bg-linear-to-br from-blue-900/30 to-slate-900/50 rounded-2xl border border-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <Play className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <p className="text-sm font-semibold">
                      Success Story #{item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Can{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Help!
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don&apos;t just offer services — we build bold, tailored
              strategies that grow your brand, spark engagement, and drive real
              results.
            </p>
          </div>

          <CardHoverEffect />
        </div>
      </section>

      {/* Logo & Webdesign Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Logo & Web Design
              <span className="block py-3 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Effortless for you. Powerful for your brand.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Let us do the heavy lifting — while you focus on what you do best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-3xl font-bold">
                Transform Your Online Presence with a Website That Works as Hard
                as You Do
              </h3>
              <p className="text-lg text-gray-300">
                Stand out, get found, and convert like never before — all in
                under 30 days.
              </p>
              <p className="text-gray-400">
                We create fully custom, modern websites built to turn visitors
                into customers, with clean design, strategic flow, and full SEO
                optimization baked in from day one.
              </p>

              {/* Features List */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">Tailored-to-you design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">
                    Conversion-driven structure
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">
                    Unlimited revisions until it&apos;s perfect
                  </span>
                </div>
              </div>
            </div>

            {/* Sample Websites */}
            <div className="bg-linear-to-br from-blue-900/20 to-slate-900/20 p-8 rounded-2xl border border-blue-500/20">
              <h4 className="text-xl font-bold mb-6 text-center">
                Our Work Samples
              </h4>
              <div className="space-y-4">
                <a
                  href="https://yourneighborrick.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition border border-blue-500/20 hover:border-blue-500/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400">yourneighborrick.com</span>
                    <ExternalLink size={18} className="text-gray-400" />
                  </div>
                </a>
                <a
                  href="https://theraynegronstory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition border border-blue-500/20 hover:border-blue-500/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400">theraynegronstory.com</span>
                    <ExternalLink size={18} className="text-gray-400" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-12 p-4 md:p-8 bg-linear-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              This isn&apos;t just web design.
            </h3>
            <p className="text-xl text-cyan-400 font-semibold">
              It&apos;s your digital storefront — reimagined for performance.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Move{" "}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Brands{" "}
                </span>
                Forward
              </h2>
              <p className="text-gray-300 text-lg text-justify mb-6 leading-relaxed">
                At Blue Agency, we don&apos;t just market — we move brands
                forward. We&apos;re an independent, full-service marketing
                agency built for today&apos;s digital world. With a passion for
                creativity and data-driven strategies, we specialize in digital
                advertising, marketing videos, web design, branding, and
                high-impact campaigns across platforms like Instagram, TikTok,
                and Facebook.
              </p>
              <p className="text-gray-300 text-lg text-justify mb-6 leading-relaxed">
                From startups to established brands, we work with businesses
                ready to grow — providing everything from social media
                advertising to branding strategies and customized marketing
                packages with transparent pricing plans. What sets us apart? A
                human approach, honest communication, and measurable results. We
                stay ahead of trends, so your brand doesn&apos;t just keep up —
                it leads. Whether you&apos;re launching something new,
                rebranding, or scaling up, Blue Agency is your creative growth
                partner.
              </p>

              <div className="bg-linear-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
                <p className="text-xl font-semibold text-blue-300 mb-2">
                  Our Mission
                </p>
                <p className="text-gray-300">
                  To empower brands to stand out and succeed through bold
                  creative, smart strategy, and powerful digital marketing.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[600px] w-full">
              <Image
                src="/about.jpg"
                alt="Example image"
                fill
                className="object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Highlight */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 rounded-3xl px-2 py-4 md:p-12 border border-blue-500/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Build a Website That {""}
                <span className=" bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Delivers Results
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Stand out, get found, and convert like never before — all in
                under 30 days.
              </p>
            </div>
            <MovingCards />

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition"
              >
                Launch Your Website <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Clients Love the {""}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you&apos;re launching something new, rebranding, or scaling
            up, Blue Agency is your creative growth partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-linear-to-r from-blue-600 to-cyan-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition"
            >
              Schedule a Free Consultation
            </a>
            {/* <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-blue-500/50 hover:bg-blue-900/30 transition">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                BLUE AGENCY
              </div>
              <p className="text-gray-400 text-sm">
                Your creative growth partner for digital success.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition"
                  >
                    Video Ads
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition"
                  >
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition"
                  >
                    Digital Campaigns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-blue-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-blue-400 transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Blue Agency. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
