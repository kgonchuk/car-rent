import React from "react";
import Container from "../Container/Container";
import Header from "../../pages/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import LoaderSpiner from "../LoaderSpiner/LoaderSpiner";

const Layout = () => {
  return (
    <>
      <header className={css.background}>
        <Container>
          <Header />
        </Container>
      </header>
      <Container>
        <main>
          <Suspense fallback={<LoaderSpiner />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
