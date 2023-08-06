import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Album from './pages/Album'
import Register from './pages/Register'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/album" element={<Album />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
