import React from "react";
import '../App.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Shopping App</h1>
        <div>
            <button className="login-button">Войти</button>
            <button className="cart-button">Корзина</button>
        </div>
    </div>
  );
};

export default Navbar;