import { Link } from "react-router-dom"

export const User = ({usuario, onCerrarSesion}) => {
    return (
        <div className="hidden xl:flex space-x-5 items-center">
            {
                usuario ? (
                    <div className="flex items-center gap-3 text-white font-bold">
                        <img src={usuario.avatar} alt="" width={40} height={40} className='rounded-full' />
                        <p>{usuario.email}</p>
                        <button onClick={onCerrarSesion} className='bg-green-500 font-bold text-white rounded-md p-2'>Salir</button>
                    </div>
                ) : (
                    <Link to="/login" className="bg-red-500 text-white rounded-md font-bold px-5 py-2"  >Login</Link>
                    
                )
            }

        </div>
    )
}
