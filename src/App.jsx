import React,{useState} from "react"
import Tabla from "./tabla"
import Modal from "./modal"

function App() {

  const [abrirModal,setAbrirModal]= useState(false);
  const [datos, setDatos] = useState([]);

  const agregarDato = () => {
    
    const nuevoDato = 
    
    // Actualizamos el estado para incluir el nuevo dato
    setDatos([...datos, nuevoDato]);
  };

  const abrirMod=()=>{
    setAbrirModal(true)
  }

  const cerrarMod=()=>{
    setAbrirModal(false)
  }

  return (
    <>
      <div className="w-screen h-screen fixed  bg-blue-200">

      
        <div className="ml-32 mt-24 static ">
        <button className="hover:bg-gray-500 hover:text-white ml-[78%] mb-10 bg-gray-300 border-black border-2 rounded-md px-3" onClick={abrirMod}>Agregar</button>
        <Tabla></Tabla>
        <Modal abrir={abrirModal} cerrar={cerrarMod}></Modal>
        </div>
      </div>
    </>
  )
}

export default App
