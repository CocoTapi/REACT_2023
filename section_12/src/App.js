import React, { Fragment } from 'react';

import Header from "./conponents/Layout/Header";
import Meals from './conponents/Meals/Meals';
import Cart from './conponents/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
