import "./App.css";

import ProductGrid from "./Pages/ProductGrid";
import ProdView from "./Pages/ProdView";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Signin from "./Pages/Signin";
import Signup from "./Pages/signup";
import Address from "./Pages/Address";
import ReactDOM from "react-dom/client";
import Profile from "./Pages/Profile";
import OrderSummary from "./Pages/OrderSummary";
import OrderDetails from "./Pages/OrderDetails";
import Orders from "./Pages/Orders";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProdView />} />
        <Route path="/grid" element={<ProductGrid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/address" element={<Address />} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/ordersummary" element={<OrderSummary></OrderSummary>} />
        <Route path="/OrderDetails" element={<OrderDetails></OrderDetails>} />
        <Route path="/Orders" element={<Orders></Orders>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
