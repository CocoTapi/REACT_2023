import React, { Fragment, useState } from 'react';

import Header from "./conponents/Layout/Header";
import Meals from './conponents/Meals/Meals';
import Cart from './conponents/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
