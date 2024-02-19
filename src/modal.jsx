import React, { useState } from 'react';

const Modal = ({ abrir, cerrar, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAceptar = () => {
    // Puedes guardar los datos en el estado local o pasarlos a la función onSubmit
    // para manejarlos en el componente principal.
    onSubmit(formData);

    // Cerrar el modal después de aceptar.
    cerrar();
  };

  if (!abrir) {
    return null;
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
        <div className='flex flex-col w-[80%] left-16 border-2 border-black absolute bg-blue-300 top-[15%]'>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className='w-[75%] mt-10 mb-6 mx-7 border-[1px] border-black'
            placeholder='Nombre'
          />
          <textarea
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            placeholder='Descripción'
            className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
          />
          <div className='ml-[50%] flex justify-evenly mb-10'>
            <button
              className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md '
              onClick={handleAceptar}
            >
              Aceptar
            </button>
            <button
              className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md'
              onClick={cerrar}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Modal;