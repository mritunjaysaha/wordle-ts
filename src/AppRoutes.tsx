import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.LOG_IN} element={<LogIn />} />
        </Routes>
    );
};
