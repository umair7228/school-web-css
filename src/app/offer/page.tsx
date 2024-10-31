import { BookA, BookOpenText, Calculator, FileClock, PenTool, Sandwich, ShieldCheck, Volleyball } from "lucide-react";
import React from "react";
import '@/app/css/offer.css'

const Offer = () => {
  return (
    <main className="offer-container">
      {/* Start of Divs */}
      <div className="offer-cards">
        <div className="offer-card green-card">
          <span className="icon-wrapper green-icon">
            <BookOpenText className="icon" />
          </span>
          <h4 className="card-title">Learn</h4>
          <p className="card-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="offer-card orange-card">
          <span className="icon-wrapper orange-icon">
            <Volleyball className="icon" />
          </span>
          <h4 className="card-title">Play</h4>
          <p className="card-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="offer-card blue-card">
          <span className="icon-wrapper blue-icon">
            <Sandwich className="icon" />
          </span>
          <h4 className="card-title">Meal</h4>
          <p className="card-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* Title and Headline */}
      <h2 className="offer-heading">
        What <span className="underline">We</span> Offer
      </h2>
      <p className="offer-subheading">
        Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts.
      </p>

      <div className="offer-grid">
        {/* Math Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon orange-bg">
              <Calculator className="icon" />
            </span>
          </span>
          <h3 className="box-title">Math Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* English Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon blue-bg">
              <BookA className="icon" />
            </span>
          </span>
          <h3 className="box-title">English Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Reading for Kids Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon purple-bg">
              <BookOpenText className="icon" />
            </span>
          </span>
          <h3 className="box-title">Reading for Kids Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* History Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon green-bg">
              <FileClock className="icon" />
            </span>
          </span>
          <h3 className="box-title">History Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Active Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon light-orange-bg">
              <ShieldCheck className="icon" />
            </span>
          </span>
          <h3 className="box-title">Active Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Drawing Class */}
        <div className="offer-box">
          <span className="icon-border">
            <span className="inner-icon orange-bg">
              <PenTool className="icon" />
            </span>
          </span>
          <h3 className="box-title">Drawing Class</h3>
          <p className="box-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Offer;
