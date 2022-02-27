import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("scroll", parallaxShift);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  function parallaxShift(e) {
    setOffset(window.scrollY);
  }

  return (
    <>
      <div className="hero-image" style={{ backgroundPositionY: offset }}>
        <div className="hero-text" style={{ bottom: offset / 1.5 }}>
          <h1>MOTH MYSTICALS</h1>
          <h3>Tarot. JOYería. Sustainable Art.</h3>
        </div>
      </div>
    </>
  );
}
