import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import "./App.css";
import MoviesPage from "./pages/MoviesPage";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="min-h-full h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <BrowserRouter>
        <Navbar />
        <div className="w-full space-y-8">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route
              path="/profile"
              element={state.loggedIn ? <ProfilePage /> : <LoginPage />}
            />
            <Route
              path="/movies"
              element={state.loggedIn ? <MoviesPage /> : <LoginPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
