import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Home from './Pages/Home';

export const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
    ]);

    return <RouterProvider router={router} />;
};
