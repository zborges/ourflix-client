import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MoviesPage from "./pages/DiscoverMoviesPage";
import Navbar from "./components/navigation/Navbar";
import "./App.css";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="flex flex-col items-center  bg-fuchsia-500">
      <BrowserRouter>
        <Navbar />
        <div className="w-full space-y-8 ">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route
              path="/profile"
              element={state.auth.loggedIn ? <ProfilePage /> : <LoginPage />}
            />
            <Route
              path="/movies"
              element={state.auth.loggedIn ? <MoviesPage /> : <LoginPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
