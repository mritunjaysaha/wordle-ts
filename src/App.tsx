import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <Header text='Wordle' />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
