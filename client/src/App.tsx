import React, { useEffect } from "react";
import "./assets/styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AuthProvider from "./components/authProvider/AuthProvider";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Spinner from "./components/common/Spinner";

function App() {
  const loading = useSelector((state: RootState) => state.auth.loading);

  return (
    <Router>
      <AuthProvider>
        {loading && <Spinner size="full-screen" />}

        {!loading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards/:boardTitle" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        )}
      </AuthProvider>
    </Router>
  );
}

export default App;
