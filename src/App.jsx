import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, Gallery } from "./pages";
import { ScrollToTop } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
