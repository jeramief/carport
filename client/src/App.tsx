import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { StripeContainer } from "./components/StripeContainer";
import car from "../public/imgs/car.jpg";

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3> <img src={car} alt="car" />
          <button onClick={() => setShowItem(true)}>Checkout</button>
        </>
      )}
    </ShoppingCartProvider>
  );
}

export default App;
