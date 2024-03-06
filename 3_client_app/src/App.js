import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/create" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
