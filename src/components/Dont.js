import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dont() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="rsvp-img kyle-rsvp-img"></div>
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
