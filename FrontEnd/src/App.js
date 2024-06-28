import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/Profile";
import Error from "./components/Error";
import FAQs from "./components/FAQs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blank from "./components/Blank";
import Contact from "./components/Contact";
import UserService from "./service/UserService";
import UserManage from "./components/Admin/UserManage";
const App = () => {
  return (
    <Router>
      <Routes>
        {UserService.adminOnly() && (
          <>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/usermanage" element={<UserManage />} />
          </>)}
          <Route path="*" element={<Navigate to="/login" />} />‰
          
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<Error />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;
