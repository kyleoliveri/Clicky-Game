import React from 'react'
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="red no-shadows">
                <div className="nav-wrapper center">
                    <span style={{ fontSize: "36px" }}>Clicky Game!</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar