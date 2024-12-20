import React from "react";
import "./Sponsers.css";

const Sponsers = () => {
  return (
    <div className="sponsers-container">
      <h1 className="main-title">Sponsors</h1>
      <div className="grid-layout">
        {/* Title Sponsor */}
        <div className="sponsor-card title-box">
          <h2>Title Sponsor</h2>
          <ul>
            <li>Publicity posters placed on campus locations like mess, lecture halls, etc.</li>
            <li>Logo prominently featured on RIC’25 exclusive merchandise.</li>
            <li>A stall during the event at a prime location.</li>
            <li>15-minute speaker slot during the event.</li>
            <li>Exclusive promotion on RIC’s official Instagram account.</li>
            <li>Free registration for four persons.</li>
            <li>Accommodation for one person.</li>
            <li>Exclusive mention during the event.</li>
          </ul>
        </div>

        {/* Platinum Sponsor */}
        <div className="sponsor-card platinum-box">
          <h2>Platinum Sponsor</h2>
          <ul>
            <li>Highlighted on RIC posters and banners.</li>
            <li>Exclusive promotions on RIC’s Instagram account.</li>
            <li>Prime stall location at the event.</li>
            <li>Company logo on exclusive event merchandise.</li>
            <li>Inclusion in event email blasts.</li>
          </ul>
        </div>

        {/* Silver Sponsor */}
        <div className="sponsor-card silver-box">
          <h2>Silver Sponsor</h2>
          <ul>
            <li>Logo placement on promotional material.</li>
            <li>Exclusive promotion on RIC's social media accounts.</li>
            <li>Stall space during the event.</li>
          </ul>
        </div>

        {/* Gold Sponsor */}
        <div className="sponsor-card gold-box">
          <h2>Gold Sponsor</h2>
          <ul>
            <li>Company name featured on event banners.</li>
            <li>Prominent logo placement on event posters.</li>
            <li>Social media mentions on RIC’s official Instagram account.</li>
            <li>Inclusion in event email blasts.</li>
          </ul>
        </div>

        {/* Bronze Sponsor */}
        <div className="sponsor-card bronze-box">
          <h2>Bronze Sponsor</h2>
          <ul>
            <li>Logo placement on the official event website.</li>
            <li>Recognition as a sponsor during the event.</li>
            <li>Certificate of appreciation for support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
