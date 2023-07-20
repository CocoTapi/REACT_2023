import React, { useState } from 'react';

import Header from "./conponents/Layout/Header";
import Meals from './conponents/Meals/Meals';
import Cart from './conponents/Cart/Cart';
import CartProvider from './conponents/store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
