import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dont() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="rsvp-img kyle-rsvp-img"></div>
      <h1 className='powered-by'>Powered By CodeLabs x Mozilla</h1>
      <div className="graphic-dont"></div>
      <div className="man-graphic-dont"></div>
      <h2 className="dont-title">
        Here's a list of things you <span className="red-wont">won't</span> get:
      </h2>
      <ul className="dont-points">
        <li>
          <span className="cross">&#10008;</span> A Dhol Tasha
        </li>
        <li>
          <span className="cross">&#10008;</span> A Huge Banner Dropped on the
          Side of the Building (RIP)
        </li>
        <li>
          <span className="cross">&#10008;</span> A Choreographed Dance (It Was
          Quite Good)
        </li>
      </ul>
      <button
        className="button kyle-button"
        onClick={() => {
          navigate("/dos");
        }}
      >
        See More
      </button>
    </div>
  );
}
