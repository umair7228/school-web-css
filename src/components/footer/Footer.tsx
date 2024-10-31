import Image from "next/image";
import React from "react";
import img1 from '../../../public/gallery-images/image2.jpg';
import img2 from '../../../public/gallery-images/image3.jpg';
import img3 from '../../../public/gallery-images/image4.jpg';
import img4 from '../../../public/gallery-images/image5.jpg';
import img5 from '../../../public/gallery-images/image6.jpg';
import img6 from '../../../public/gallery-images/image7.jpg';
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import '@/components/footer/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section about">
          <h3>About Umair</h3>
          <p>A dedicated Frontend Developer and aspiring Cloud Data Engineer, passionate about building seamless user interfaces and efficient data solutions.</p>
        </div>

        <div className="footer-section projects">
          <h3>Projects</h3>
          <ul>
            <li>Cloud Data Engineering</li>
            <li>Exploratory Data Analysis</li>
            <li>Frontend Development</li>
          </ul>
        </div>

        <div className="footer-section gallery">
          <h3>Gallery</h3>
          <div className="gallery-grid">
            <Image src={img1} alt="Image 1" />
            <Image src={img2} alt="Image 2" />
            <Image src={img3} alt="Image 3" />
            <Image src={img4} alt="Image 4" />
            <Image src={img5} alt="Image 5" />
            <Image src={img6} alt="Image 6" />
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li>Email: umair@example.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Main St, City, State, Zip Code</li>
          </ul>
        </div>

        <div className="footer-section connect">
          <h3>Connect</h3>
          <div className="social-links">
            <Link href={'https://www.linkedin.com/in/umairnawaz7228/'} target="_blank">
              <Linkedin />
            </Link>
            <Link href={'https://github.com/umair7228'} target="_blank">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
