import React, { useState } from 'react';

import Header from "./components/Layout/Header";
import ShopTitle from "./components/Meals/ShopTitle";
import MealList from './components/Meals/MealList';
import CartList from './components/Cart/CartList';

function App() {
    const data = [
      {
          id: Math.floor(Math.random() * 10000),
          name: 'Salmon Omusubi',
          description: 'King salmon, white rice, seaweed',
          price: 1.99
      },
      {
          id: Math.floor(Math.random() * 10000),
          name: 'Tuna mayo Omusubi',
          description: 'Atlantic tuna mixed with Japanese mayonaise, white rice, seaweed',
          price: 1.99
      },
      {
          id: Math.floor(Math.random() * 10000),
          name: 'Chicken Omusubi',
          description: 'Teriyaki chicken, white rice, seaweed',
          price: 1.99
      },
      {
          id: Math.floor(Math.random() * 10000),
          name: 'Ramen Egg Omusubi',
          description: 'Ramen egg, white rice, seaweed',
          price: 1.50
      },
      {
          id: Math.floor(Math.random() * 10000),
          name: 'Plum Omusubi',
          description: 'Japanese pickled plum, white rice, seaweed',
          price: 1.99
      }
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartHandler = () => {
        setIsCartOpen(true)
    };

    const closeCartHandler = () => {
      setIsCartOpen(false)
    };

 
  return (
    <React.Fragment>
      <Header onClick={openCartHandler} />
      <ShopTitle />
      <MealList 
        data={data}
      />
      {isCartOpen && <CartList onClick={closeCartHandler} />}
    </React.Fragment>
  );
}

export default App;
