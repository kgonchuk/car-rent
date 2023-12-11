import React from "react";
import MovingComponent from "react-moving-text";
import css from "../../pages/HomePage/HomePage.module.css";

const AnimationsForChaining = ["popIn"];

const AnimationChain = () => {
  return (
    <div className={css.title}>
      <MovingComponent
        type={AnimationsForChaining}
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        Welcome <br /> Car-Rental Service
      </MovingComponent>
    </div>
  );
};
export default AnimationChain;
