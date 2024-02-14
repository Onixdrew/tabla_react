import React,{useState} from 'react'


const Tabla = () => {


  
  return (
    <>
        <div>
            
            <table className=" text-left  font-light">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="">
                    <th className="border-[1px] border-black py-3 px-8">ID</th>
                    <th className="border-[1px] border-black py-3 px-10">Nombre</th>
                    <th className="border-[1px] border-black py-3 px-10">Descripción</th>
                    <th className="border-[1px] border-black py-3 px-10">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <td className="border-[1px] border-black px-8">1</td>
                    <td className="border-[1px] border-black px-3">hams</td>
                    <td className="border-[1px] border-black px-3">soy hams</td>
                    <td className="border-[1px] border-black px-10"><button className='w-14 my-2 text-white bg-red-500 rounded-full shadow-md shadow-black'>
                        x</button></td>
                    </tr>

                    

                </tbody>

            </table>
        </div>
    </>
  )
}

export default Tabla;