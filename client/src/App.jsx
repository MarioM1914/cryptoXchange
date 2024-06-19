import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import News from "./pages/News";
import Wallet from "./pages/Wallet";
import Market from "./pages/Market";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import BuyCrypto from "./pages/BuyCrypto";

 const App = () => {
  return (
    <>
      {/* <div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-crypto" element={<BuyCrypto />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/news" element={<News />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      {/* </div> */}
    </>
  );
}
export default App;