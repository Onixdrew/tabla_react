// En el componente Tabla
import React from 'react';

const Tabla = ({ datos, eliminarDato }) => {
  return (
    <>
      <div>
        <table className="text-left font-light">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border-2 py-3 px-8">ID</th>
              <th className="border-2 py-3 px-10">Nombre</th>
              <th className="border-2 py-3 px-10">Descripción</th>
              <th className="border-2 py-3 px-10">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, index) => (
              <tr key={index}>
                <td className="border-2 py-3 px-8">{index + 1}</td>
                <td className="border-2 py-3 px-10">{dato.nombre}</td>
                <td className="border-2 py-3 px-10">{dato.descripcion}</td>
                <td className="border-2 py-3 px-10">
                  <button
                    className="w-14 text-white bg-red-600 rounded-full shadow-md shadow-black"
                    onClick={() => eliminarDato(index)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;