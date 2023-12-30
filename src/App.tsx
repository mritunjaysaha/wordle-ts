import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { RootLayout } from './Layouts/RootLayout';

function App() {
    return (
        <BrowserRouter>
            <RootLayout>
                <Navbar text='Wordle' />
                <AppRoutes />
                <Footer />
            </RootLayout>
        </BrowserRouter>
    );
}

export default App;
