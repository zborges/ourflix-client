import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={
              state.loggedIn ? <Profile /> : <LoginPage />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
