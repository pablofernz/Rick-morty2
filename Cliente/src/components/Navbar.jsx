import SearchBar from "./SearchBar";
import style from "./Card.module.css"
import { NavLink } from "react-router-dom";


const NavBar = ({ onSearch, logout }) => {
    return (
        <div>
            <div className={style.Barra}>
            <SearchBar onSearch={onSearch} />
            </div>
            <div className={style.BotonesBarra}>
            <NavLink to="/home"><button >Home</button></NavLink>
            <NavLink to="/about"><button>About</button></NavLink>
            <NavLink to="/"><button onClick={logout}>Logout</button></NavLink>
            </div>
        </div>
    )
}
export default NavBar