import './NavBar.css'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate()
    return (
        <nav className="nav_Interno">
            <div className="logoP">
                <h3 onClick={() => navigate('/')} >
                    Optica RP
                </h3>
            </div>
            
            <div className="botones">
                <button onClick={() => navigate('/category/deportivo')}>Deportivo</button>
                <button onClick={() => navigate('/category/optico')}>Optico</button>
                <button onClick={() => navigate('/category/infantil')}>Infantil</button>
            </div>
        </nav>
    )
}


export default NavBar;