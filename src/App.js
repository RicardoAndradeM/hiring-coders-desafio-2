import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import productData from './productData';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setData(productData);
    let cartContent = JSON.parse(localStorage.getItem("cart"));
    if (cartContent !== null) {
      setCart(cartContent);
    } 
  },[]);

  function handleCart(index) {
      let newCart = cart;
      newCart.push(data[index]);
      setCart(newCart);
      localStorage.setItem("cart",JSON.stringify(cart));
      setCartCount(cart.length)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo da TECH NERD"/>
        <nav className="nav-bar">
          <ul className="menu">
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Inicio</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Fale Conosco</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Conta</a></li>
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Carrinho ({cartCount})</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='section-one'>
          {
            data.map((product,index) => (
              <div className='product-cotainer' key={index} >
                <div><img src={product.img} className="product-img" alt="imagem do produto" /></div>
                <h4 className="product-name" >{product.nome}</h4>
                <h6 className="Product-price">{product.preco}</h6>
                <button onClick={ () => handleCart(index) }>Adicionar ao carrinho</button>
              </div>
            ))
          }
        </section>
      </main>
      <footer>
        <div class="footer-text footer-text-gap">
            <p>Desevolvido com 💓 por Ricardo de Andrade Maia.</p>
            <p >Todos os direitos reservados.</p>
        </div>
        <div class="footer-text">
            <a href="https://github.com/RicardoAndradeM">
              <img id="github" src={github} alt="github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/ricardoandradem/">
              <img id="linkedin" src={linkedin} alt="linkedin logo" />  
            </a>
        </div>
    </footer>
    </div>
  );
}

export default App;
