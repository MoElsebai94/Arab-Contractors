import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/civil.png";
import fimage2 from "../images/other.png";
import fimage3 from "../images/online.png";
import fimage4 from "../images/translation.png";

function Feature() {
  return (
    <div id="features">
      <h1>SERVICES</h1>
      <div className="a-container">
        <Featurebox
          image={fimage1}
          title="Civil Engineering Online Services"
          linker="https://www.upwork.com"
        />
        <Featurebox
          image={fimage2}
          title="Other Majors Online Services"
          linker="https://www.upwork.com"
        />
        <Featurebox
          image={fimage3}
          title="Online Courses"
          linker="https://www.udemy.com"
        />
        <Featurebox
          image={fimage4}
          title="Translation Services"
          linker="https://www.upwork.com"
        />
      </div>
    </div>
  );
}

export default Feature;
