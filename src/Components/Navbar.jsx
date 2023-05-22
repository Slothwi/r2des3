import { Navbar, Container } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css"


export default function Navigation() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const logo = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
    
    return (
        <div>
            <Navbar className="navbar">
        <Container className="container">
            <Navbar.Brand>
                <div className="img-container">
                    <img src={logo} alt="pokemon" />
                </div>
            </Navbar.Brand>
        <div className="nl">
            <NavLink to="/" className={setActiveClass}>
                Home
            </NavLink>
            <NavLink to="/pokemones" className={setActiveClass}>
                Pokemones
            </NavLink>
        </div>
        </Container>
        </Navbar>
        </div>
    )

}