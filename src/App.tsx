import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Layout } from './Layout';

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Header text='Wordle' />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
