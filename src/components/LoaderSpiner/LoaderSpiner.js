import React, { Component } from "react";
import css from "./LoaderSpiner.module.css";
import { BallTriangle } from "react-loader-spinner";

class LoaderSpiner extends Component {
  render() {
    return (
      <div className={css.overlay} id="overlay">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#E3FFA8"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
}

export default LoaderSpiner;
