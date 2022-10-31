import React  ,{useState}from "react";
import Button from "../../Helpers/Button";
import axios from "axios";

const LoginForm = () => {
  const [user,setUser] =useState({})

  function handleChange(e) {
    const val =e.target.value;
    setUser({
      ...user,
      [e.target.name]:val
    })

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login",user)
    // function replace signifie qu'il n'est pas possible d'utiliser le bouton "retour" pour revenir au document d'origine par contre "href"
    .then(() => window.location.replace("cliens"))
    .catch(Error=>console.log(Error))
    
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2 "
            htmlFor="Email"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-semibold mb-2 "
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="password"
          />
        </div>

        <div className="">
          <Button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2 focus:ring-indigo-500 mb-3 mt-4"
            title="Sign in"
          />
        </div>
        <div className="flex justify-between mt-5">
          <div className="text-secondary-green">
            <a href="http://localhost:3001/ForgetPassword">
              Mot de passe Oublié
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
