import { useState } from "react";
import Button from "../../Helpers/Button";
import axios from "axios";

const SigninForme = () => {

  const [user, setUser] = useState({});

  function handleChnage(e) {
    const val = e.target.value;
    setUser({
      ...user,
      [e.target.name]: val,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/registre", user)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <p id="err"></p>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2 "
              htmlFor="Email"
            >
              Fullname
            </label>
            <input
              onChange={handleChnage}
              name="fullname"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="fullname"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2 "
              htmlFor="Email"
            >
              Email
            </label>
            <input
              onChange={handleChnage}
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
              onChange={handleChnage}
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
          <div className="flex  mt-5">
            <a href="/Login">tu as un compte?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForme;
