import React from 'react'
import {
    Link, NavLink
} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={ ( { isActive } ) => ( isActive ? "nav-item nav-link" : "active" ) } to="/">Home</NavLink>
                        <NavLink className={ ( { isActive } ) => ( isActive ? "nav-item nav-link" : "active" ) } to="/about">About</NavLink>
                        <NavLink className={ ( { isActive } ) => ( isActive ? "nav-item nav-link" : "active" ) } to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
