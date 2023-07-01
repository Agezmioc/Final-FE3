import { React, useContext} from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { modeState, modeDispatch } = useContext(ContextGlobal);

  const toggleMode = () => {
    modeDispatch({ type: "CHANGE_MODE" });
  };

  return (
    <nav>
      <div>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
        <Link to="/favs"><h4>Favs</h4></Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleMode}>{modeState.darkMode ? "Bright Mode" : "Dark Mode"}</button>
    </nav>
  )
}

export default Navbar