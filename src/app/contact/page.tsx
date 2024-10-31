import React from "react";
import hero from "../../../public/bg-images/hero-image.webp";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import '@/app/css/contact.css'

const Contact = () => {
  return (
    <main className="contact-container">
      <div className="hero-container">
        <Image src={hero} alt="Hero Image" className="hero-image" />

        <div className="hero-text">
          <h1 className="main-heading">Get In Touch</h1>
          <p className="subheading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            explicabo saepe doloremque nisi! atque praesentium? Autem maiores
            assumenda molestias nesciunt.
          </p>
        </div>
      </div>

      <div className="content-container">
        <div className="form-container">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
            </div>
            <input type="text" placeholder="Subject" className="input-field" />
            <textarea rows={8} placeholder="Message" className="input-field" />
            <button className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <span className="icon-wrapper">
              <MapPin className="icon" />
            </span>
            <div>
              <h3 className="info-title">Location:</h3>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon-wrapper">
              <Clock className="icon" />
            </span>
            <div>
              <h3 className="info-title">Open Days:</h3>
              <p>Monday To Friday</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon-wrapper">
              <Mail className="icon" />
            </span>
            <div>
              <h3 className="info-title">Email:</h3>
              <p>Click on hire to contact me</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon-wrapper">
              <Phone className="icon" />
            </span>
            <div>
              <h3 className="info-title">Call:</h3>
              <p>+92 12345676</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
