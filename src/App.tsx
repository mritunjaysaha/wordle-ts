import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
    return (
        <>
            <Header text='Wordle' />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
