import React, { useEffect } from "react";
import Header from "./components/Layout/Header/Header.js";
import "./App.css";
import webfont from "webfontloader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect,
  Link,
} from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import ProductDetail from "./components/Product/ProductDetail";
import SideNav from "./components/Layout/Header/SideNav.js";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSignUp from "./components/User/LoginSignUp.js";
import About from "./components/About/About.js";

import Profile from "./components/User/Profile.js";
import ProtectedRoute from "./components/Route/ProtecedRoute.jsx";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart.js";
import UpdateProfile from "./components/User/UpdateProfile.js";
import ChangePass from "./components/User/ChangePass.js";
function App() {
  console.log("App.js");

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);

  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    //   store.dispatch(loadUser());
    //   getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/search" element={<Products />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<LoginSignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route element={<ProtectedRoute />}> */}
        {/* <Route path="/Profile" element={<ProtectedRoute />}>
          <Route path="/Profile" element={<Profile/>} />
        </Route> */}
        {/* <Route
          path="/Profile"
          element={<ProtectedRoute component={<Profile />} />}
        ></Route> */}
        {/* </Route> */}

        <Route
          path="/Profile"
          element={
            JSON.parse(localStorage.getItem("user")) ? (
              <Profile />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/me/update" element={<UpdateProfile />} />
        {/* <Route path="/password/update" element={<ChangePass />} />
      <Route path="/login?redirect=shipping" element={<ChangePass />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
