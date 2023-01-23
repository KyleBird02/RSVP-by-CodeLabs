import React from "react";
import { useNavigate } from "react-router-dom";

export default function Do() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="rsvp-img kyle-rsvp-img"></div>
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
