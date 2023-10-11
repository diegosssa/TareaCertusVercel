export const Home = () => {
  return (
    <div>
      <h1 className="text-white text-center mb-2 text-4xl ">¡Bienvenido a Netflix!</h1>
      <h1 className="text-white text-center mb-2 text-3xl ">Este es el mejor servicio de peliculas en steaming y podras disfrutarlo por una suscripcion</h1>
      <div className="flex h-screen w-full items-start justify-center bg-cover bg-no-repeat" >
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src="https://integrapersonalbranding.com.mx/wp-content/uploads/2021/02/peliculas-marca-personal-1.png" width="400" alt="" srcset="" />
              <h1 className="mb-2 text-2xl">Ingresa a mas de 100 Peliculas!!!</h1>
              <span className="text-gray-300">Entra para logearte</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
