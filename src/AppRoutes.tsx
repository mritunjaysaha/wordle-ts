import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.LOG_IN} element={<LogIn />} />
            <Route path={ROUTES.LEADER_BOARD} element={<LeaderBoard />} />
        </Routes>
    );
};
