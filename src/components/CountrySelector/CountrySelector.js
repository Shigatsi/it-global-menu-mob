import React from "react";

import "./CountrySelector.css";
import countries from "../../utils/mockups/countries.js";
import tick from "../../images/icon_16x16_S_Tick.svg";
import arrowBottom from "../../images/icon_16x16_S_Arrow-bottom.svg";

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = React.useState({});
  const [isListOpen, setListOpen] = React.useState(false);

  function toggleListOpen() {
    setListOpen(!isListOpen);
  }

  function handleSelectedItem(listItem) {
    setSelectedCountry(listItem);
  }

  console.log(countries);
  return (
    <div className="dd-wrapper">
      <button className="dd-header" onClick={toggleListOpen}>
        <h3 className="dd-header-title">
          <img
            className="dd-header-icon-country"
            src={selectedCountry.icon}
            alt={selectedCountry.country}
          />
          {selectedCountry.abbreviation}
          <img src={arrowBottom} alt={"show menu"} />
        </h3>
      </button>
      <div className={isListOpen ? "dd-list dd-list-open" : "dd-list"}>
        <h3 className="dd-list-title">Страна</h3>
        {countries.map((country, i) => (
          <button
            key={i}
            className="dd-list-item"
            onClick={(_) => handleSelectedItem(country)}
          >
            <div>
              <img
                className="dd-list-item-icon"
                src={country.icon}
                alt={country.country}
              />
              {country.country}
            </div>
            {selectedCountry.country === country.country && (
              <img className="dd-select-img" src={tick} alt="tick" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CountrySelector;
