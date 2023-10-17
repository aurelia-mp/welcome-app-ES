import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { SessionContextProvider } from './context/sessionContext';
import { useMediaQuery } from 'react-responsive'


function App() {

  const esComputadora = useMediaQuery({ query: '(min-width: 1224px)'})
  return (
      <>
         {!esComputadora ? 
        <BrowserRouter>
          <SessionContextProvider>
            <Main />
          </SessionContextProvider>
          <Footer />
        </BrowserRouter>
        :
        <div className="computadora">
        <img src="/fotos/logo.jpg" alt="logo"></img>
        <h2>Está aplicación fue desarrollada para visualizar en pantallas más pequeñas.<br></br>Por favor, ábrala en su teléfono celular o tablet.</h2>
        <p><a href="https://www.palosantohotel.com">Ir a nuestro sitio web</a></p>
        </div>
        }
      </> 
  );
}

export default App;
