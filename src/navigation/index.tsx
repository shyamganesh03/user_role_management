import Layout from "@/components/container/Layout";
import SignIn from "@/pages/auth/SignIn";
import Dashboard from "@/pages/Dashboard";
import Invoices from "@/pages/Invoices";
import UserManagement from "@/pages/UserManagement";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/invoice" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
