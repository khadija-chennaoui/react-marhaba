import React from "react";
import LoginForm from "../../../components/Forms/LoginForme";

const Login = () => {
    return (
        <div className="">
        <div className=" bg-gradient-to-r from-indigo-500  relative h-screen w-full overflow-y-hidden">
          {/* <img src={loginBg} alt="bg-login" className="object-cover w-full" /> */}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white shadow-xl w-[450px] p-8 rounded-lg">
            <div className="flex justify-center ">
              {/* <img src={logo} alt="logo" className="" /> */}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mt-5 "> Login </h3>
              <h5 className="text-base mt-3 ">
                à{" "}
                <span className="text-secondary-green">Marhaba</span>
              </h5>
            </div>
            <div className="mt-10">
              <LoginForm />
            </div>
          </div>
        </div>
      </div> 
    )
}
export default Login;