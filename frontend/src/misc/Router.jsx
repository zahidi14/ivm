import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Product } from "../components/pageComp";
import Order from "../components/pageComp/Order";
import Report from "../components/pageComp/Report";
import Login from "../page/Login/Login";
import NotFound from "../page/NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/order" element={<Order />} />
      <Route path="/report" element={<Report />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
