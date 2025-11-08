import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffect() {
  return (
    <div className="container mx-auto ">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
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
