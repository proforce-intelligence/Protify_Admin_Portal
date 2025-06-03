import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/dasboards/sidebars/sidebars";
import LoginAdmin from "./Components/Authentication/Login/loginAdmin";
import SuperAdminLogin from "./Components/Authentication/Login/SuperAdmins";
import ActivitiesDashboard from "./Components/dasboards/adminViewDashboads/activitiesDashboard/mainPage";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/super_admin" element={<SuperAdminLogin/>} />
      <Route path="/login_admin" element={<LoginAdmin />} />
      <Route path="/Sidebar" element={<Sidebar />} />
       <Route path="/admin_activity" element={<ActivitiesDashboard />} />
    </Routes>
  );
};

export default App;
