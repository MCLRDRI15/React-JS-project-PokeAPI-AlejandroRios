import React from "react";
import { NavLink } from "react-router-dom";
import charizard from "../img-folder/charizard.gif";
import ivysaur from "../img-folder/ivysaur.gif";
import "./Home.module.css";
import Form from "../input-form-component/Form"

const Home = () => {
  return (
    <div>
      <Form isSeachActive={false} isHamburguerActive={false}/>
      <div className="text-center">
        <section className="section">
          <h1 className="welcome">Welcome to PokéApp</h1>
          <div className="pokemons-gif">
            <img className="charizard" src={charizard} alt="POKEMON" />
            <span className="button-text-controller">
              <NavLink
                className="home-button"
                to="/pokemons"
                activeClassName="nav-active"
              >
                Find pokemons
              </NavLink>
            </span>
            <img className="ivysaur" src={ivysaur} alt="POKEMON" />
          </div>
        </section>
        <footer className="text-muted">
          <strong className="footer">Talos Digital</strong>
        </footer>
      </div>
    </div>
  );
};

export default Home;