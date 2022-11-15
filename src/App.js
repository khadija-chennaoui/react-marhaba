import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./pages/front-office/auth/Forgetpassword";
import Login from "./pages/front-office/auth/Login";
import Signin from "./pages/front-office/auth/Signin";
import Blog from "./components/Forms/Blog";
import Client from "./pages/front-office/clients/Client";
import Error from "./components/Error";
import DashAdmin from "./components/DashAdmin";
import PrivateRoutes from "./components/privateRoute/privateRoutes";
import PrivateRole from "./components/privateRoute/privateRole";
function App() {
  return (
    <div>
      <Routes>
        {/* PrivateRoutes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/cliens" element={<Client />} />
          <Route element={<PrivateRole />}>
            <Route path="/dashadmin" element={<DashAdmin />} />
          </Route>
        </Route>

        {/* Public Route */}
        <Route path="/" element={<Signin />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
