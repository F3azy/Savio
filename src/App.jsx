import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Home, Gallery } from "./pages";
import { ScrollToTop } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
