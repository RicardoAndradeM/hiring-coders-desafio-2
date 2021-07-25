import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo da TECH NERD"/>
        <nav className="nav-bar">
          <ul className="menu">
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Inicio</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Fale Conosco</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Conta</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Carrinho</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
