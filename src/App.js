import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Bet from './Produtos/Bet';
import Btc from './Produtos/Btc';
import Leiloes from './Produtos/Leiloes';
import Programmers from './Produtos/Programmers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/bet" element={<Bet />} />
            <Route path="produto/btc" element={<Btc />} />
            <Route path="produto/leiloes" element={<Leiloes />} />
            <Route path="produto/programmers" element={<Programmers />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
