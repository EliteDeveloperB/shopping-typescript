import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Stor/Store";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/productPage/ProductPage";
import Cart from "./pages/cart/Cart";
import { ShopingCartProvider } from "./context/AppContext";
import PrivateRote from "./components/privateRote/PrivateRote";

function App() {
  return (
    <>
      <ShopingCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route element={<PrivateRote />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Layout>
      </ShopingCartProvider>
    </>
  );
}

export default App;
