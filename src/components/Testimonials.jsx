import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Blue Agency helped us launch our brand with an incredible video campaign — it didn’t just get views, it brought in real customers. Their creativity and strategy are unmatched.",
      name: "Ava Johnson",
      designation: "Founder, Glow Skincare",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The new website they built completely transformed our online presence. It’s sleek, fast, and we’ve seen a huge boost in inquiries since launch.",
      name: "Daniel Reed",
      designation: "Marketing Director, Horizon Fitness",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "From branding to ad campaigns, Blue Agency has been our go-to team. Their attention to detail and genuine communication make all the difference.",
      name: "Sofia Martinez",
      designation: "CEO, UrbanNest Interiors",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The video ads they created for our product launch were next-level. The results were beyond expectations — high engagement and strong conversions.",
      name: "Jason Lee",
      designation: "Co-Founder, Swift Apparel",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Working with Blue Agency was a breeze. They handled everything — from strategy to design — with professionalism and passion. We couldn’t be happier.",
      name: "Emily Carter",
      designation: "Head of Marketing, Nova Health",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
