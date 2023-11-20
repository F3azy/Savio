import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
