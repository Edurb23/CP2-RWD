import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <nav className="menu">
            <Link to= "/">
                HOME
            </Link>
            <span> | </span>
            <Link to= '/produtos'>
                PRODUTOS
            </Link>
        </nav>
    )
}

export default Menu