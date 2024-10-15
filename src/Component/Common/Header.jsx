import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <ul>
            <NavLink to={"/"}>HomePage</NavLink>-
            <NavLink to={"/count"}>Count</NavLink>-
            <NavLink to={"/checkHooks"}>check-Hooks</NavLink>-
            <NavLink to={"/Batch18"}>check-Hooks</NavLink>-
            <NavLink to={"/worker"}>worker</NavLink>-


            
        </ul>
    )
}

export default Header;