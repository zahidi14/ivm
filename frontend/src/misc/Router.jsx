import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Product,
  AddProduct,
  Report,
  Order,
} from "../components/pageComp";
import Login from "../page/Login/Login";
import NotFound from "../page/NotFound/NotFound";
import { ProtectedRoute } from "./ProtectedRoute";
import Register from "../page/Register/Register";

const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path="/report"
        element={
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
