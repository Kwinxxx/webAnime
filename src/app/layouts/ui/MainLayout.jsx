import { Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <>
            <div>Header</div>
            <main>
                <Outlet />
            </main>
            <div>Footer</div>
        </>
    )
}