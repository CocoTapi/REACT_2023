import { useState } from 'react';

import Header from "./components/Layout/Header";
import ShopTitle from "./components/Meals/ShopTitle";
import MealList from './components/Meals/MealList';
import CartList from './components/Cart/CartList';
import CartProvider from './components/store/CartProvider';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    const closeCartHandler = () => {
      setIsCartOpen(false);
    };
 
  return (
    <CartProvider>
      {isCartOpen && <CartList onClose={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <ShopTitle />
        <MealList />
      </main>
    </CartProvider>
  );
}

export default App;
