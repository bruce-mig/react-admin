import React from "react";

const Nav = () => {
    return (
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

            <ul className="nav flex-column mb-auto">
                <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use href="#door-closed" /></svg>
                        Sign out
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Nav;