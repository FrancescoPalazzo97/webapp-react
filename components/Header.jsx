import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={`/`}>
                    <img src="/react.svg" alt="Logo" className="img-fluid" />
                    <span className="navbar-brand h1">Webapp React</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
