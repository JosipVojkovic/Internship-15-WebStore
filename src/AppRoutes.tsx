import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Products";
import AddProduct from "./pages/AddProduct";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
