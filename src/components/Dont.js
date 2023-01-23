import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dont() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="rsvp-img kyle-rsvp-img"></div>
      <div className="graphic-dos"></div>
      <h2>
        Here's a list of things you <span className="red-wont">won't</span> get:
      </h2>
      <ul>
        <li>
          <span className="cross">&#10008;</span> A Dhol Tasha
        </li>
        <li>
          <span className="cross">&#10008;</span> A Huge Banner Dropped on the
          Side of the Building
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
