import { Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <div>
            <div>Shapka</div>
            <Outlet />
        </div>
    )
}