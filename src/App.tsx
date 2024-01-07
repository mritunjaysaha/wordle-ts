import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { RootLayout } from './Layouts/RootLayout';
import { AuthProvider } from './store/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RootLayout>
                    <AppRoutes />
                </RootLayout>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
