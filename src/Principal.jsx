import { Navbar } from "./components/navbar/Navbar"
import { AppRouter } from "./router/AppRouter"

export const Principal = () => {
    return (
        <>
            <Navbar />
            <div className="bg-red-800">
            <AppRouter />
            </div>
        </>
    )
}
