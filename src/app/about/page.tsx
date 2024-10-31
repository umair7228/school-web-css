import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import { Check } from "lucide-react";
import img from "../../../public/gallery-images/image4.jpg";
import '@/app/css/about.css'

const About = () => {
  return (
    <main className="about-container">
      <div className="hero-container">
        <Image src={hero} alt="Hero Image" className="hero-image" />

        <div className="hero-text">
          <h1 className="main-heading">About Us</h1>
          <p className="subheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            explicabo saepe doloremque nisi! atque praesentium? Autem maiores
            assumenda molestias nesciunt.
          </p>
        </div>
      </div>

      <div className="content-container">
        <div className="text-content">
          <h2 className="section-heading">Why Choose Us</h2>
          <p className="section-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, saepe rem eos illo nobis quos exercitationem dolores
            labore? Quisquam quae fugit nisi, nesciunt excepturi vero voluptatem
            ullam. Magni, cupiditate vel.
          </p>

          <div className="features">
            <Check className="icon" />
            <p className="feature-text">Separated they live</p>
          </div>
          <div className="features">
            <Check className="icon" />
            <p className="feature-text">Bookmarksgrove right at the coast</p>
          </div>
          <div className="features">
            <Check className="icon" />
            <p className="feature-text">Large language ocean</p>
          </div>

          <div className="stats">
            <span className="stat-item">
              4,000+
              <p className="stat-description">Students</p>
            </span>
            <span className="stat-item">
              49
              <p className="stat-description">Teachers</p>
            </span>
            <span className="stat-item">
              12
              <p className="stat-description">Awards</p>
            </span>
          </div>
        </div>

        <div className="image-content">
          <Image src={img} alt="Image" className="about-image" />
        </div>
      </div>
    </main>
  );
};

export default About;
