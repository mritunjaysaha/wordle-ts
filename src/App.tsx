import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { RootLayout } from './Layouts/RootLayout';
import { AppProvider } from './store/AppProvider';
import { AuthProvider } from './store/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <AuthProvider>
                    <RootLayout>
                        <AppRoutes />
                    </RootLayout>
                </AuthProvider>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
