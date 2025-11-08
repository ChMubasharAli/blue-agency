"use client";

import Carousel from "./ui/carousel";

export default function VideoCarousel() {
  const slideData = [
    {
      src: "https://www.youtube.com/embed/6v2L2UGZJAM", // YouTube embed URL
      thumbnail: "https://img.youtube.com/vi/6v2L2UGZJAM/maxresdefault.jpg", // Optional thumbnail
    },
    {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      src: "https://www.youtube.com/embed/7wtfhZwyrcc",
      thumbnail: "https://img.youtube.com/vi/7wtfhZwyrcc/maxresdefault.jpg",
    },
    {
      src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
