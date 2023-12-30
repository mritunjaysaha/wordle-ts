import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Layout } from './Layout';

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar text='Wordle' />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
