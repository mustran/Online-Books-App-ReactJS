import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <NavLink to="/" className="logo">
                        <i className="fas fa-book-open" />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/books/HTML" id="navHTML" className="nav">
                                HTML
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/books/CSS" id="navCSS" className="nav">
                                CSS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/books/JavaScript" id="navJavaScript" className="nav">
                                JavaScript
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/books/React" id="navReact" className="nav">
                                React
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/books/NodeJS" id="navNodeJS" className="nav">
                                NodeJS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
