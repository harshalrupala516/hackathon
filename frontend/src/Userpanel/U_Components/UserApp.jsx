import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import UserHome from "./UserHome";
import FileNOCForm from "./FileNOCForm";
import CheckStatus from "./CheckStatus";

const UserApp = () => {
  return (
    <Router>
      {/* Navbar */}
      <UserNavbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/file-noc" element={<FileNOCForm />} />
        <Route path="/check-status" element={<CheckStatus />} />
      </Routes>

      {/* Footer */}
      <UserFooter />
    </Router>
  );
};

export default UserApp;
