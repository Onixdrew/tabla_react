import React, { useState } from 'react';


const App = () => {
  const [data, setData] = useState( [
    {
      id: 1,
      nombre: "Jabón",
      Descripción: "Jabón de manos con aroma a lavanda."
    },
    {
      id: 2,
      nombre: "Shampoo",
      Descripción: "Shampoo para cabello seco y dañado."
    },
    {
      id: 3,
      nombre: "Crema facial",
      Descripción: "Crema hidratante facial con SPF 30."
    },
    {
      id: 4,
      nombre: "Cepillo de dientes",
      Descripción: "Cepillo de dientes eléctrico con temporizador."
    },
    {
      id: 5,
      nombre: "Perfume",
      Descripción: "Perfume floral con notas de jazmín y rosa."
    },
    {
      id: 6,
      nombre: "Desodorante",
      Descripción: "Desodorante en barra sin aluminio."
    },
    {
      id: 7,
      nombre: "Crema de manos",
      Descripción: "Crema de manos con manteca de karité."
    },
    {
      id: 8,
      nombre: "Cremallera",
      Descripción: "Cremallera de plástico para coser."
    },
    {
      id: 9,
      nombre: "Calcetines",
      Descripción: "Calcetines de algodón para deporte."
    },
    {
      id: 10,
      nombre: "Cartera",
      Descripción: "Cartera de cuero genuino con múltiples compartimentos."
    },
    {
      id: 11,
      nombre: "Champú seco",
      Descripción: "Champú seco en aerosol para cabello graso."
    },
    {
      id: 12,
      nombre: "Aceite de coco",
      Descripción: "Aceite de coco virgen para uso alimenticio y cosmético."
    },
    {
      id: 13,
      nombre: "Cafetera",
      Descripción: "Cafetera de goteo programable para café fresco."
    },
    {
      id: 14,
      nombre: "Taza",
      Descripción: "Taza de cerámica con diseño de gato."
    },
    {
      id: 15,
      nombre: "Libreta",
      Descripción: "Libreta de notas con cubierta de cuero sintético."
    },
    {
      id: 16,
      nombre: "Planta de interior",
      Descripción: "Planta de interior resistente a la poca luz."
    },
    {
      id: 17,
      nombre: "Lámpara de escritorio",
      Descripción: "Lámpara LED de escritorio con ajuste de brillo."
    },
    {
      id: 18,
      nombre: "Auriculares Bluetooth",
      Descripción: "Auriculares inalámbricos con cancelación de ruido."
    },
    {
      id: 19,
      nombre: "Bolsa de almuerzo",
      Descripción: "Bolsa térmica para almuerzos saludables."
    },
    {
      id: 20,
      nombre: "Lápiz labial",
      Descripción: "Lápiz labial mate de larga duración."
    },
    {
      id: 21,
      nombre: "Sudadera con capucha",
      Descripción: "Sudadera con capucha y bolsillo de canguro."
    },
    {
      id: 22,
      nombre: "Reloj de pulsera",
      Descripción: "Reloj de pulsera analógico con correa de acero inoxidable."
    },
    {
      id: 23,
      nombre: "Paraguas",
      Descripción: "Paraguas compacto resistente al viento."
    },
    {
      id: 24,
      nombre: "Organizador de cables",
      Descripción: "Organizador de cables para escritorio."
    },
    {
      id: 25,
      nombre: "Bolsa de dormir",
      Descripción: "Bolsa de dormir ligera para acampar."
    },
    {
      id: 26,
      nombre: "Botella de agua",
      Descripción: "Botella de agua de acero inoxidable con tapa a prueba de fugas."
    },
    {
      id: 27,
      nombre: "Lavadora de ropa",
      Descripción: "Lavadora de carga frontal con capacidad extra grande."
    },
    {
      id: 28,
      nombre: "Secadora de ropa",
      Descripción: "Secadora de ropa con sensor de humedad y funciones de vapor."
    },
    {
      id: 29,
      nombre: "Aspiradora",
      Descripción: "Aspiradora sin bolsa con filtro HEPA."
    },
    {
      id: 30,
      nombre: "Plancha de vapor",
      Descripción: "Plancha de vapor con ajustes de temperatura variables."
    }
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [id, setId] = useState(31);
  const [nombre, setNombre] = useState('');
  const [Descripción, setDescripción] = useState('');
  const [editId, setEditId] = useState(null);
  const [editNombre, setEditNombre] = useState('');
  const [editDescripción, setEditDescripción] = useState('');
  const [mostrarAlertaEliminar, setMostrarAlertaEliminar] = useState(false);
  const [obtenerID, setObtenerID] = useState();

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerarModal = () => {
    setModalVisible(false);
  };

  const abrirEditModal = (id, nombre, Descripción) => {
    setEditId(id);
    setEditNombre(nombre);
    setEditDescripción(Descripción);
    setEditModalVisible(true);
  };

  const cerrarEditModal = () => {
    setEditId(null);
    setEditNombre('');
    setEditDescripción('');
    setEditModalVisible(false);
  };

  const agregarDatos = () => {
    if (nombre !='' && Descripción !='')
      setData([...data, { id, nombre, Descripción }]);
      setId(id + 1);
      setNombre('');
      setDescripción('');
      cerarModal();
      mesajeAgragar()
  };

  const mesajeAgragar=()=>{
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      title: "Agregado con exito",
      timer:1500
    })
  }
  
  const editarDatos = () => {
    const updatedData = data.map(persona => {
      if (persona.id === editId) {
        return { ...persona, nombre: editNombre, Descripción: editDescripción };
      }
      return persona;
    });
    setData(updatedData);
    cerrarEditModal();
    mensajeEditar()
  };
  
  const mensajeEditar=()=>{
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      title: "Dato actualizado",
      timer:1500
    })
  }


  const abrirAlertaeliminar = () => {
    setMostrarAlertaEliminar(true);
  };



  const confirmarEliminacion = () => {
    const actualizarDatos = data.filter(persona => persona.id !== obtenerID);
    setData(actualizarDatos);

    setMostrarAlertaEliminar(false);
    mensajeEliminar()
  };

  const mensajeEliminar=()=>{
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      title: "Se elimino con exito",
      timer:1500
    })
  }

  const cancelarEliminacion = () => {
    setMostrarAlertaEliminar(false);
  };

 

  const mostrarFuncionAlertaEliminar = () => {
    Swal.fire({
      icon: "error",
      title: "¿Estás seguro?",
      text: "¡Esto eliminará el elemento!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick:false
    }).then((result) => {

      if (result.isConfirmed) {
        confirmarEliminacion();
      } else {
        cancelarEliminacion();
      }
    });
  };


  <script>
    {$(document).ready( function () {
        $('#idTabla').DataTable(
          {
            language: {
              url: '//cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json',
            },
          }
        );
    } )}
  </script>

  return (
    <div>


      <div className='w-[70%] ml-[15%] mb-[15%]'>
        <h1 className='ml-[20%] text-3xl mt-[5%]'>Administración</h1>
        <button className='ml-[55%]  w-20  text-white bg-gray-600 rounded-full px-2 hover:w-24 hover:text-blue-500 py-1 shadow-md shadow-black"' onClick={abrirModal}>Agregar</button>
        <table id='idTabla' className=' mt-12 text-center '>
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
                <td className="border-2 py-3 px-10">{item.Descripción}</td>
                <td className="border-2 py-3 px-10">
                  <button className="w-20 hover:text-lg hover:text-blue-500 text-white  bg-red-600 rounded-full shadow-md shadow-black"  onClick={() => {setObtenerID(item.id), abrirAlertaeliminar()}}>Eliminar</button>
                  <button className="w-20 hover:text-lg hover:text-blue-500 ml-7  text-white bg-gray-600 rounded-full shadow-md shadow-black" onClick={() => abrirEditModal(item.id, item.nombre, item.Descripción)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {mostrarAlertaEliminar && mostrarFuncionAlertaEliminar()}
  
  
        {modalVisible && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60'>
            <div className='flex flex-col w-[50%] left-[25%] border-2 border-black absolute bg-blue-300 top-[20%]'>
              <div className='ml-[20%] mt-7 text-2xl font-serif'>Agrega nueva área del conocimiento</div>
              <input
                className='w-[75%] mt-7 mb-6 mx-7 border-[1px] border-black'
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <textarea
                className='w-[80%] h-[5em] mb-10 mx-7 border-[1px] border-black'
                type="text"
                placeholder="Descripción"
                value={Descripción}
                onChange={(e) => setDescripción(e.target.value)}
              />
              <div className='ml-[50%] flex justify-evenly mb-10'>
                <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' onClick={agregarDatos}>Aceptar</button>
                <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md' onClick={cerarModal}>Cancelar</button>
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
                value={editDescripción}
                onChange={(e) => setEditDescripción(e.target.value)}
              />
              <div className='ml-[50%] flex justify-evenly mb-10'>
                <button className='w-[30%] bg-gray-300 hover:bg-green-400 border-black border-[1px] rounded-md' onClick={editarDatos}>Aceptar</button>
                <button className='w-[30%] bg-gray-300 hover:bg-red-400 border-black border-[1px] rounded-md' onClick={cerrarEditModal}>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;