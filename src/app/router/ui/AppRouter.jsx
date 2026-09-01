import { RouterProvider } from "react-router/dom";
import { router } from '../routers';


export const AppRouter = () => {
    return <RouterProvider router={router} />;
}