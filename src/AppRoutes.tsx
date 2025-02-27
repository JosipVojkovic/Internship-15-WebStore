import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Products />} />
        <Route path="/AddProduct" element={<AddProduct />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
