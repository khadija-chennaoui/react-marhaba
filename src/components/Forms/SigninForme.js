// import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Helpers/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios";

const SigninForme = () => {
  // const [user, setUser] = useState({});

  const { register, handleSubmit , formState: { errors } } = useForm();

  const api = (data) => {
    axios.post("http://localhost:4000/api/auth/registre", data)
      .then((res) => {
        if (res.data.message === "email Déja Existe") {
          document.getElementById("err").hidden = false;
          document.getElementById("err").innerText = res.data.message;
        } 
        else if(res.data.message==="added sccssfly"){
          document.getElementById("err").innerText=null
          window.location.replace("login");
        }
      })
      .catch(Error=>console.log(Error));
  }

  return (
    <div>
      <p id="err" className="bg-red-400 animate-pulse shadow appearance-none border rounded w-full py-2 px-4 mt-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" hidden ={true}></p>
      <form onSubmit={handleSubmit(api)}>
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2 " htmlFor="Email">Fullname</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname" type="text"
              {...register("fullname", {
                required: 'Entre your fullname',
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  msg: "Name not valid",
                },
                minLength: {
                  value: 3,
                  message: "entrez au moins 3 caractères. ",
                },
              })}
            />
            <div><ErrorMessage errors={errors} name="fullname"/></div>
            
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2 "
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register("email", {
                required: 'Enter your email',
                pattern: {
                  value:/^\w.+@[a-zA-Z]+?.[a-zA-Z]{2,3}$/,
                  message: 'Email incorrect'
                },
              })}
            />
            <div><ErrorMessage errors={errors} name="email"/></div>

          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              {...register("password", {
                required: 'Enter your password',
                minLength: {
                  value: 4,
                  msg: "entrez au moins 4 caractères. ",
                }
              })}
            />
            <div><ErrorMessage errors={errors} name="password"/></div>

          </div>

          <div className="">
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2 focus:ring-indigo-500 mb-3 mt-4"
              title="Sign in"
            />
          </div>
          <div className="flex  mt-5">
            <Link to="/Login">tu as un compte?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForme;