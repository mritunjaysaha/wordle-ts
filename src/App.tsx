import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { RootLayout } from './Layouts/RootLayout';
import { AuthProvider } from './store/AuthProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RootLayout>
                    <Navbar text='Wordle' />
                    <AppRoutes />
                    <Footer />
                </RootLayout>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
