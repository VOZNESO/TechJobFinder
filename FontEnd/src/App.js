import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/Profile";
import Error from "./components/Admin/Error";
import FAQs from "./components/Admin/FAQs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blank from "./components/Admin/Blank";
import Contact from "./components/Admin/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<Error />} />
        <Route path="/faq" element={<FAQs/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/blank" element={<Blank/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </Router>
  );
};

export default App;
