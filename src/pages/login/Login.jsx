import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from "../../components/Inputs/InputForm"
import * as Yup from 'yup'
import { getLogin } from "../../helpers/getLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContexCertus } from "../../context/AppContext";

export const Login = () => {
    const {setUsuario} = useContext(ContexCertus)
    const navigate = useNavigate()
    const schema = Yup.object({
        email:Yup.string().required("El correo es obligatorio").email('El correo es invalido'),
        password: Yup.string().required("La contraseña es requerido")
    })

    const styleInput = "border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 w-full"

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        getLogin(data).then(res =>{
            if(res.statusCode === 401){
                toast.error("Correo o contraña incorrectos")
            }else{
                localStorage.setItem("token", res.access_token)
                toast.success("Login correctamente")
                setUsuario(res)
                navigate("/dashboard", {state: {logged: true}})
            }
        })
    };
    
    return (
        <div className="flex items-center justify-center h-[calc(100vh_-_88px)]">
            <div className="min-w-fit flex-col border bg-neutral-800 px-6 py-14 shadow-md rounded-[4px] ">
                <div className="mb-8 flex justify-center">
                    <img className="w-24" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm rounded-md space-y-5">

                    <InputForm tipo="text" placeholder="ejemplo@hotmail.com" name="email" style={styleInput} register={register} errors={errors}  />

                    <InputForm tipo="password" placeholder="********" name="password" style={styleInput} register={register} errors={errors} />

                    <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Ingresar</button>

                </form>
                
                <div className="mt-5 flex justify-between text-sm text-gray-600">
                    <a className="text-gray-50" href="#">Olvidaste Contraseña</a>
                    <a className="text-gray-50" href="#">Registrase</a>
                </div>
                <div className="flex justify-center mt-5 text-sm">
                    <p className="text-gray-400">or you can sign with</p>
                </div>
                <div className="mt-5 flex text-center text-sm text-gray-400">
                    <p>
                        This site is protected by reCAPTCHA and the Google <br />
                        <a className="underline" href="">Privacy Policy</a>  and <a class="underline" href="">Terms of Service</a>  apply.
                    </p>
                </div>
            </div>
        </div>
    )
}
