import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../models/user";
import { Link } from "react-router-dom";

const Nav = () => {
    const [user, setUser] = useState(new User());
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('user');
            setUser(new User(
                data.id,
                data.first_name,
                data.last_name,
                data.email,
                data.role
            ));
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {})
    }

    return (
        <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

            <ul className="nav flex-row mb-auto">
                <Link to="/profile"
                    className="nav-link d-flex align-items-le gap-2">
                    {user.name}
                </Link>
                <Link to="/login" className="nav-link d-flex align-items-center gap-2"
                    onClick={logout}>
                    <svg className="bi"><use href="#door-closed" /></svg>
                    Sign out
                </Link>
            </ul>
        </header>
    )
}

export default Nav;