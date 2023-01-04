import React from "react";

function About() {
  return (
    <div id="about">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UAjjrvequrk"
        title="Tanzania"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="about-image"
      ></iframe>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          The Arab Contractors (AC) is one of the leading construction companies
          in the Middle East and Africa. Our employees work in collaboration
          with our customers, partners, and suppliers in more than 29 countries.
        </p>
        <button
          onClick={function () {
            window.location.href =
              "https://www.arabcont.com/english/about-us.aspx";
          }}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default About;
