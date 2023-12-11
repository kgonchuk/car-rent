import React from "react";
import css from "./HomePage.module.css";
import MovingText from "../../helpers/AnimationChain/AnimationChain";

const HomePage = () => {
  return (
    <article className={css.backgroundImg}>
      <MovingText />
    </article>
  );
};

export default HomePage;
