import React from "react";
import{Routes,Route} from "react-router-dom";
import ForgetPassword from "./pages/front-office/auth/Forgetpassword";
import Login from "./pages/front-office/auth/Login";
import Signin from "./pages/front-office/auth/Signin";
import Blog from "./components/Forms/Blog";
import Client from "./pages/front-office/clients/Client";
function App() {
  return (
   <div>
    <Routes>
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/ForgetPassword" element={<ForgetPassword/>} />
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/cliens" element={<Client/>}/>
    
    
    </Routes>
   
   </div>
  );
}

export default App;
