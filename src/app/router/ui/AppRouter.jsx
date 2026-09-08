import { RouterProvider } from "react-router/dom";
import { router } from '../routers';
import { Background } from '../../../shared/ui/background';

export const AppRouter = () => {
    return (
        <>
            <Background />
            <RouterProvider router={router} />
        </>
    )
}