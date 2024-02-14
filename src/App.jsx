import React, { useState } from 'react';
import Tabla from './tabla';
import Modal from './modal';

function App() {
  const [abrirModal, setAbrirModal] = useState(false);
  const [datos, setDatos] = useState([]);

  const agregarDato = (nuevoDato) => {
    // Asigna un identificador único a cada dato
    const id = new Date().getTime();
    setDatos([...datos, { ...nuevoDato, id }]);
  };

  const eliminarDato2 = (id) => {
    // Filtra los datos para eliminar el que tiene el identificador proporcionado
    setDatos(datos.filter((dato) => dato.id !== id));
  };

  const abrirMod = () => {
    setAbrirModal(true);
  };

  const cerrarMod = () => {
    setAbrirModal(false);
  };

  return (
    <>
      <div className="w-screen h-screen fixed  bg-blue-200">
        <div className="ml-32 mt-24 static ">
          <h1 className='text-4xl font-medium font-serif'>Areas del conocimiento</h1>
          <button
            className="hover:bg-gray-500 hover:text-white ml-[78%] mb-10 bg-gray-300 border-black border-2 rounded-md px-3"
            onClick={abrirMod}
          >
            Agregar
          </button>
          <Tabla datos={datos} eliminarDato={eliminarDato2} />
          <Modal abrir={abrirModal} cerrar={cerrarMod} onSubmit={agregarDato} />
        </div>
      </div>
    </>
  );
}

export default App;