import { useContext } from 'react'
import { ContexCertus } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { User } from './components/User'
import { opciones } from './utils/dataNavbar'
export const Navbar = () => {
    const navigate = useNavigate()

    const { usuario, setUsuario } = useContext(ContexCertus)

    const onCerrarSesion = () =>{
        localStorage.removeItem("token")
        navigate("/login")
        setUsuario("")
    }

    
    return (
        <nav className="flex justify-between bg-stone-700 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                <a className="text-3xl font-bold font-heading" >
                <img className="w-24" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                </a>
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    {opciones.map(opcio=>(
                        <li key={opcio?.id} onClick={()=>navigate(`${opcio?.path}`)}>{opcio?.name}</li>
                    ))}
                </ul>
                <div className="hidden xl:flex space-x-5 items-center">
                   <User usuario={usuario}  onCerrarSesion={onCerrarSesion} />
                   
                </div>
            </div>
            
            <a class="navbar-burger self-center mr-12 xl:hidden" href="/Dashboard" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
        </nav>
    )
}
