"use client";
import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import hero from "../../../public/bg-images/hero-image.webp";
import '@/app/css/home.css';

function HomePage() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setVideoOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("modal")) {
      setVideoOpen(false);
    }
  };

  return (
    <main className="main-container">
      <Image
        src={hero}
        alt="Hero Image"
        fill
        className="hero-image"
      />

      <div className="text-container">
        <h1 className="heading">
          Learning Center for Your Kids
        </h1>
        <p className="subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          accusantium. Suscipit, dolor sequi, voluptate facere recusandae veniam
          totam ut!
        </p>
      </div>

      <button className="play-button" onClick={handleVideoClick}>
        <PlayCircle className="w-30 h-30 md:w-16 md:h-16 xs:w-14 xs:h-14" />
      </button>

      {isVideoOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <video className="video-player" controls>
              <source src="/video/school.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;
