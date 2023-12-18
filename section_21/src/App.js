import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetailPage from './pages/ProductDetailPage';

//routing version 2 
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='products' element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

//routing version 1
const router = createBrowserRouter([
  { 
    //this is an absolute path which needs to include children's path(relative path) or dont include at all
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //path: ''
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
