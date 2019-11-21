import React, { useState } from "react";
import "./home.css";

import Button from "../../components/Button/button";
import NavBar from "../../components/NavBar/nav-bar";

const Home = () => {
  return (
    <main className="main-home">
      <NavBar></NavBar>
      <section className='container-button'>
        <Button className="btn-pg-home" text="LOGIN"></Button>
        <Button className="btn-pg-home btn-home-second" text="REGISTER"></Button>
      </section>
      <footer>
        <a href="https://br.freepik.com/fotos-vetores-gratis/alimento">
          Alimento foto criado por freepik - br.freepik.com
        </a>
      </footer>
    </main>
  );
};

export default Home;
