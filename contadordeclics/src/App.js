import "./App.css";
import logo from "./image/logo.jpg";
import Boton from "./pages/Boton";
import Contador from "./pages/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logo} alt="Logo de la pagina"></img>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}></Contador>
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        ></Boton>
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
