import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// REACT_ROUTER
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

// Components aka pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

// firebase config
import firebaseConfig from "./config/FirebaseConfig";

// init Firebase 
// firebase needed to render first before any other file
firebase.initializeApp(firebaseConfig);


const App = () => {
  const [user, setUser] = useState(null); // def. state is null because with null we cannot check users auth and other stuff.

  return (
    <Router>
      <ToastContainer />

      {/* in below context in value element we provide => user,setuser state so it keep on updating state */}
      <UserContext.Provider value={{ user, setUser }}>
      {/* Header */}
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/* we skipped path in below Route bcz when we dont provide path element in below route so when user search for the 
        page that is not available below component by default provide notfound page */}
          <Route path="*" component={Notfound} />
        </Switch>
        {/* FOOTER */}
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
