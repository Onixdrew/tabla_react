import React, { useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [id, setId] = useState(1);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState('');
  const [editDescripcion, setEditDescripcion] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openEditModal = (id, nombre, descripcion) => {
    setEditId(id);
    setEditNombre(nombre);
    setEditDescripcion(descripcion);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditId(null);
    setEditNombre('');
    setEditDescripcion('');
    setEditModalVisible(false);
  };

  const addData = () => {
    setData([...data, { id, nombre, descripcion }]);
    setId(id + 1);
    setNombre('');
    setDescripcion('');
    closeModal();
  };

  const deleteData = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const editData = () => {
    const updatedData = data.map(item => {
      if (item.id === editId) {
        return { ...item, nombre: editNombre, descripcion: editDescripcion };
      }
      return item;
    });
    setData(updatedData);
    closeEditModal();
  };

  return (
    <div>
      <h1 className='ml-[30%] text-3xl mt-[10%]'>Areas del conocimiento</h1>
      <button className='ml-[55%]  w-20  text-white bg-gray-600 rounded-full px-2 hover:w-24 hover:text-blue-500 py-1 shadow-md shadow-black"' onClick={openModal}>Agregar</button>
      <table className='ml-[30%] mt-12'>
        <thead>
          <tr>
            <th className="border-2 py-3 px-8">ID</th>
            <th className="border-2 py-3 px-10">Nombre</th>
            <th className="border-2 py-3 px-10">Descripción</th>
            <th className="border-2 py-3 px-10">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="border-2 py-3 px-8">{item.id}</td>
              <td className="border-2 py-3 px-10">{item.nombre}</td>
              <td className="border-2 py-3 px-10">{item.descripcion}</td>
              <td className="border-2 py-3 px-10">
                <button className="w-20 hover:text-lg hover:text-blue-500 text-white bg-red-600 rounded-full shadow-md shadow-black" onClick={() => deleteData(item.id)}>Eliminar</button>
                <button className="w-20 hover:text-lg hover:text-blue-500 ml-7  text-white bg-gray-600 rounded-full shadow-md shadow-black" onClick={() => openEditModal(item.id, item.nombre, item.descripcion)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
          <div className='flex flex-col w-[50%] left-[25%] border-2 border-black absolute bg-blue-300 top-[20%]'>
            <div className='ml-[30%] mt-7 text-2xl font-serif'>Agrega nueva área del conocimiento</div>
            <input
              className='w-[75%] mt-7 mb-6 mx-7 border-[1px] border-black'
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <div className='ml-[50%] flex justify-evenly mb-10'>
              <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' onClick={addData}>Aceptar</button>
              <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md' onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {editModalVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
          <div className='flex flex-col w-[50%] left-[20%] border-2 border-black absolute bg-green-500 top-[20%]'>
            <div className='ml-[30%] mt-7 text-2xl font-serif'>Editar área del conocimiento</div>
            <input
              className='w-[75%] mt-7 mb-6 mx-7 border-[1px] border-black'
              type="text"
              placeholder="Nombre"
              value={editNombre}
              onChange={(e) => setEditNombre(e.target.value)}
            />
            <textarea
              className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
              type="text"
              placeholder="Descripción"
              value={editDescripcion}
              onChange={(e) => setEditDescripcion(e.target.value)}
            />
            <div className='ml-[50%] flex justify-evenly mb-10'>
              <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' onClick={editData}>Aceptar</button>
              <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md' onClick={closeEditModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;