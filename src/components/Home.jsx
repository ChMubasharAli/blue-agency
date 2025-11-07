import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, CheckCircle, ArrowRight, Menu, X, Star } from 'lucide-react';

export default function BlueAgencyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      title: "Video Ads",
      description: "Break through the noise with high-converting, scroll-stopping video ads. Designed to disrupt, crafted to convert, and made to put your brand in motion.",
      icon: "🎬"
    },
    {
      title: "Logo & Brand Identity",
      description: "Stand out with a brand look that speaks volumes. From bold logos to cohesive brand design, we bring your vision to life with personality and purpose.",
      icon: "✨"
    },
    {
      title: "Website Development",
      description: "Launch a custom, responsive website that's as functional as it is stunning. SEO-ready, mobile-optimized, and built to convert — all tailored to your business goals.",
      icon: "💻"
    },
    {
      title: "Digital Ad Campaigns",
      description: "No more wasted ad spend. We create strategic, high-impact ad campaigns paired with bold creative that grabs attention and turns clicks into customers.",
      icon: "📱"
    },
    {
      title: "Social Media Management",
      description: "Grow your online presence with strategic content, community engagement, and consistent brand storytelling across the platforms that matter most.",
      icon: "🚀"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Inc",
      rating: 5,
      text: "Blue Agency transformed our digital presence completely. Our conversion rate increased by 340% in just 3 months. The team's creativity and strategic approach are unmatched."
    },
    {
      name: "Marcus Chen",
      role: "Marketing Director, GrowthCo",
      rating: 5,
      text: "Working with Blue Agency was a game-changer. Their video ads brought us qualified leads we never thought possible. Professional, creative, and results-driven."
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, Wellness Studio",
      rating: 5,
      text: "From branding to social media, Blue Agency delivered beyond expectations. They understood our vision and brought it to life with stunning creativity and measurable results."
    }
  ];

  const features = [
    "Custom Scripts & Storylines",
    "High-Quality Production",
    "Zero Time Commitment from You",
    "Proven Conversion Results"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg z-50 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BLUE AGENCY
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About Us</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition">Portfolio</a>
              <a href="#contact" className="bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition">About Us</a>
              <a href="#services" className="block text-gray-300 hover:text-blue-400 transition">Services</a>
              <a href="#portfolio" className="block text-gray-300 hover:text-blue-400 transition">Portfolio</a>
              <a href="#contact" className="block bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-2 rounded-full text-center">
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-900/30 rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Full-Service Digital Marketing Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Engaging Video Ads That
              <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Convert Real Leads
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              We don't just make videos — we craft high-performing content that grabs attention and converts real leads into loyal customers. From strategy to production, we handle everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="group bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition flex items-center gap-2">
                Start Your Campaign
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </a>
              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500/50 hover:bg-blue-900/30 transition flex items-center gap-2">
                <Play size={20} />
                Watch Showcase
              </button>
            </div>
          </div>

          {/* Video Showcase Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group cursor-pointer">
                <div className="aspect-[9/16] bg-linear-to-br from-blue-900/30 to-slate-900/50 rounded-2xl border border-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <Play className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <p className="text-sm font-semibold">Success Story #{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Effective, <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Powerful Video Ads</span> Without
              <span className="block mt-2">Any Effort on Your Part</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Our video ads are created to grab attention, build interest, and convert viewers into buyers — all without you lifting a finger. We take care of everything from research to final edit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-linear-to-br from-blue-900/20 to-slate-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition group">
                <div className="w-14 h-14 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-gray-400">
                  {index === 0 && "Every video is built on a custom script designed to resonate with your audience and drive conversions."}
                  {index === 1 && "We use state-of-the-art filming, pro-level editing, and premium graphics to make your brand shine."}
                  {index === 2 && "Sit back and relax. We handle all the heavy lifting — from concept to delivery — while you celebrate the wins."}
                  {index === 3 && "Our videos aren't just creative — they're engineered to convert viewers into real, qualified leads."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-900/30 rounded-full border border-blue-500/30">
                <span className="text-blue-400 text-sm font-medium">About Blue Agency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Don't Just Market — We Move Brands <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Forward</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We're an independent, full-service marketing agency built for today's digital world. With a passion for creativity and data-driven strategies, we specialize in digital advertising, marketing videos, web design, branding, and high-impact campaigns.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                From startups to established brands, we work with businesses ready to grow — providing everything from social media advertising to branding strategies and customized marketing packages with transparent pricing plans.
              </p>
              <div className="bg-linear-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
                <p className="text-xl font-semibold text-blue-300 mb-2">Our Mission</p>
                <p className="text-gray-300">To empower brands to stand out and succeed through bold creative, smart strategy, and powerful digital marketing.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-2xl font-bold mb-2">What Sets Us Apart?</p>
                  <p className="text-gray-300">A human approach, honest communication, and measurable results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Can <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Help!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just offer services — we build bold, tailored strategies that grow your brand, spark engagement, and drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-linear-to-br from-blue-900/20 to-slate-900/20 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition hover:transform hover:scale-105">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-blue-400 font-semibold group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Highlight */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Online Presence with a Website That
                <span className="block mt-2 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Works as Hard as You Do
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Stand out, get found, and convert like never before — all in under 30 days.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <CheckCircle className="text-blue-400 mb-3" size={28} />
                <h4 className="font-bold text-lg mb-2">Tailored-to-you design</h4>
                <p className="text-gray-400 text-sm">Custom designs that reflect your unique brand identity</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <CheckCircle className="text-blue-400 mb-3" size={28} />
                <h4 className="font-bold text-lg mb-2">Conversion-driven structure</h4>
                <p className="text-gray-400 text-sm">Every element optimized to turn visitors into customers</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl">
                <CheckCircle className="text-blue-400 mb-3" size={28} />
                <h4 className="font-bold text-lg mb-2">Unlimited revisions</h4>
                <p className="text-gray-400 text-sm">We iterate until it's absolutely perfect for you</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold mb-6">This isn't just web design.<br/>
                <span className="text-blue-400">It's your digital storefront — reimagined for performance.</span>
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition">
                Launch Your Website <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Clients Love The Results—
              <span className="block mt-2">No Stress, <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Just Success</span></span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-blue-900/20 to-slate-900/20 p-10 rounded-2xl border border-blue-500/30 max-w-4xl mx-auto">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-xl text-gray-300 mb-8 text-center leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                <p className="text-blue-400">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    activeTestimonial === index ? 'bg-blue-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you're launching something new, rebranding, or scaling up, Blue Agency is your creative growth partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-linear-to-r from-blue-600 to-cyan-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition">
              Schedule a Free Consultation
            </a>
            <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-blue-500/50 hover:bg-blue-900/30 transition">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
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
                <li><a href="#" className="hover:text-blue-400 transition">Video Ads</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Brand Identity</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Digital Campaigns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">TikTok</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
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