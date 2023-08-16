import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="nav_Interno">
            <div className="logoP">
                <h3 >
                    Optica RP
                </h3>
            </div>
            
            <div className="botones">
                <button>Hombres</button>
                <button>Mujeres</button>
                <button>Niños/as</button>
            </div>
        </nav>
    )
}

export default NavBar;
