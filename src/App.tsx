import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { StoreItemsProvider } from "./context/StoreItemsContext";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <StoreItemsProvider>
        <ShoppingCartProvider>
          <Navbar />
          <ShoppingCart />
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </ShoppingCartProvider>
      </StoreItemsProvider>
    </>
  );
}

export default App;
