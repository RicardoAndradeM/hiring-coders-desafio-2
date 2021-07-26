import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import productData from './productData';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

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
                  <li className="menu-item"><a href="google.com.br" className="menu-item-link">Carrinho ({cart.length})</a></li>
          </ul>
        </nav>
      </header>
      <section>
        {
          data.map((product,index) => (
            <div className='product-cotainer' key={index} >
              <img src={product.img} className="product-img" alt="imagem do produto" width="100px" max-height="auto"/>
              <h4 className="product-name" >{product.nome}</h4>
              <h6 className="Product-price">{product.preco}</h6>
              <button onClick={ () => handleCart(index) }>Adicionar ao carrinh</button>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
