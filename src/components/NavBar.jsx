import { Link, NavLink } from "react-router-dom";
import { BiCalculator } from 'react-icons/bi';
import { TiWeatherPartlySunny } from 'react-icons/ti';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">INICIO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive && 'active'}`}
                            to="/calculadora">
                            Calculadora <BiCalculator />
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive && 'active'}`}
                            to="/apiclima">
                            Api Clima <TiWeatherPartlySunny/>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

