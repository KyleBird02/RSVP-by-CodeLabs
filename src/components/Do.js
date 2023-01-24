import React from "react";
import { useNavigate } from "react-router-dom";

export default function Do() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="rsvp-img kyle-rsvp-img"></div>
      <h1 className='powered-by'>Powered By CodeLabs x Mozilla</h1>
      <div className="graphic-dos"></div>
      <h2 className="dos-title">
        Here's a list of things you <span className="green-will">will</span>{" "}
        get:
      </h2>
      <ul className="dos-points">
        <li>
          <span className="tick">&#10004;</span> 1 Lakh+ Prize Pool
        </li>
        <li>
          <span className="tick">&#10004;</span> Free Wi-Fi for 24 Hours
        </li>
        <li>
          <span className="tick">&#10004;</span> Free Food for Everyone
        </li>
      </ul>
      <button
        className="button kyle-button"
        onClick={() => {
          navigate("/register");
        }}
      >
        See More
      </button>
    </div>
  );
}
