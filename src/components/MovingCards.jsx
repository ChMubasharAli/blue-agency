"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { CheckCircle, Zap, Globe, RefreshCw, Star } from "lucide-react";

export default function MovingCards() {
  return (
    <div className=" rounded-md flex flex-col antialiased mb-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={cards} direction="right" speed="slow" />
    </div>
  );
}

const cards = [
  {
    icon: Star,
    name: "Tailored-to-you Design",
    quote:
      "Custom layouts designed to perfectly reflect your brand’s unique identity and goals.",
  },
  {
    icon: CheckCircle,
    name: "Conversion-Driven Structure",
    quote:
      "Every section is strategically crafted to turn visitors into loyal customers.",
  },
  {
    icon: Zap,
    name: "Lightning-Fast Delivery",
    quote:
      "Launch your high-performing website in less than 30 days without compromising quality.",
  },
  {
    icon: Globe,
    name: "SEO & Mobile Optimized",
    quote:
      "Optimized for SEO, performance, and flawless mobile experience across all devices.",
  },
  {
    icon: RefreshCw,
    name: "Unlimited Revisions",
    quote:
      "We refine and revise until your vision is perfectly realized — no limits, no stress.",
  },
];
