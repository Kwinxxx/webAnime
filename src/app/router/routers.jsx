import { createBrowserRouter } from "react-router";
import { MainLayout } from '../layouts';
import { NotFoundPage } from "../../pages/not-found/ui/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        HydrateFallback: () => <div>Loading...</div>,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, lazy: () => import('../../pages/home') },
            { path: 'catalog', lazy: () => import ('../../pages/catalog') },
            { path: 'title/:id', lazy: () => import ('../../pages/title') },
            // { path: 'watch/:id/:episode', lazy: () => import ('@/pages/player') },
            { path: 'profile', lazy: () => import ('../../pages/profile') },
        ],
    },
///    { path: 'auth', lazy: () => import('@/pages/auth') },
    { path: '*', Component: MainLayout }
]);