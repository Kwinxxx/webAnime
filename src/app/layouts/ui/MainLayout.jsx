import { Header } from "../../../widgets/header"
import { Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <div>Footer</div>
        </>
    )
}