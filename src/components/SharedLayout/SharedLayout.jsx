import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
