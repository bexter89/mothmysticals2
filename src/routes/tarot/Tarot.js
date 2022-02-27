import React from "react";
import TarotCarousel from './TarotCarousel'
import Row from "react-bootstrap/Row";
import "./tarot.css";

const Tarot = () => {
  return (
    <>
    <section className="Tarot justify-content-center">
      <h2>Tarot Ethics</h2>
      <Row className="justify-content-center mt-5">
        <TarotCarousel />
      </Row>
      </section>
    </>
  );
};

export default Tarot;
