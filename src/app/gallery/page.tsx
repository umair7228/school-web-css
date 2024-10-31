import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import img1 from "../../../public/gallery-images/image1.jpg";
import img2 from "../../../public/gallery-images/image2.jpg";
import img3 from "../../../public/gallery-images/image3.jpg";
import img4 from "../../../public/gallery-images/image4.jpg";
import img5 from "../../../public/gallery-images/image5.jpg";
import img6 from "../../../public/gallery-images/image6.jpg";
import img7 from "../../../public/gallery-images/image7.jpg";
import img8 from "../../../public/gallery-images/image8.jpg";
import img9 from "../../../public/gallery-images/image9.jpg";
import '@/app/css/gallery.css'

const Gallery = () => {
  return (
    <main className="gallery-container">
      <div className="hero-container">
        <Image src={hero} alt="Hero Image" className="hero-image" />

        <div className="hero-text">
          <h1 className="main-heading">Our Gallery</h1>
          <p className="subheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            explicabo saepe doloremque nisi! atque praesentium? Autem maiores
            assumenda molestias nesciunt.
          </p>
        </div>
      </div>

      <div className="content-container">
        <div className="grid-gallery">
          <Image src={img1} alt="Image" className="gallery-image" />
          <Image src={img2} alt="Image" className="gallery-image" />
          <Image src={img3} alt="Image" className="gallery-image" />
          <Image src={img4} alt="Image" className="gallery-image" />
          <Image src={img5} alt="Image" className="gallery-image" />
          <Image src={img6} alt="Image" className="gallery-image" />
          <Image src={img7} alt="Image" className="gallery-image" />
          <Image src={img8} alt="Image" className="gallery-image" />
          <Image src={img9} alt="Image" className="gallery-image" />
        </div>
      </div>
    </main>
  );
};

export default Gallery;
