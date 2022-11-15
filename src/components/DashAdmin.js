import Button from "../Helpers/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

const DashAdmin = () => {
  // const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const api = (data) => {
    // console.log(data)
    axios.post("http://localhost:4000/api/auth/registrelivreur", data)
      .then((res) => {
        if (res.data.message) {
          document.getElementById("err").hidden = false;
          document.getElementById("err").innerText = res.data.message;
        } else {
          document.getElementById("err").innerText = null;
          window.location.replace("login");
        }
      })
      .catch((Error) => console.log(Error));
  };
  function Logout(){
    axios.get("http://localhost:4000/api/auth/logout")
    .then((res)=>{
        if(res.data){
            localStorage.clear()
            window.location.replace("/login")
        }
    })
    .catch(error=>console.log(error))
 }

  return (
  <>
   <div class="bg-indigo-50 ">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span class="block mb-6">Hi Dear {localStorage.getItem("fullname")} </span>
            <span class="block text-indigo-600">Your Email is : ' {localStorage.getItem("email")} '</span>
            <span class="block mt-6">Ton Role est : {localStorage.getItem("role")}</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
            <button  onClick={Logout} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Logout</button> 
              {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a> */}
            </div>
          </div>
        </div>
      </div>
    <div className="w-96 mx-auto mb-2">
      <p className="text-center text-2xl font-semibold mb-3 mt-6 text-red-500">Création d'un nouveau Livreure</p>
      <p
        id="err"
        className="bg-red-400 animate-pulse shadow appearance-none border rounded w-full py-2 px-4 mt-3 mb-5 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
        hidden={true}
      ></p>
      <form onSubmit={handleSubmit(api)} >
        <div className="flex flex-col">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2 mt-5 "
              htmlFor="Email"
            >
              Fullname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              {...register("fullname", {
                required: "Entre your fullname",
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "Name not valid",
                },
                minLength: {
                  value: 3,
                  message: "entrez au moins 3 caractères. ",
                },
              })}
            />
            <div className="text-red-500">
              <ErrorMessage errors={errors} name="fullname" />
            </div>
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
                required: "Enter your email",
                pattern: {
                  // value: /^\w.+@[a-zA-Z]+?.[a-zA-Z]{2,3}$/,
                  message: "Email incorrect",
                },
              })}
            />
            <div className="text-red-500">
              <ErrorMessage errors={errors} name="email" />
            </div>
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
                required: "Enter your password",
                minLength: {
                  value: 4,
                  message: "entrez au moins 4 caractères. ",
                },
              })}
            />
            <div className="text-red-500">
              <ErrorMessage errors={errors} name="password" />
            </div>
          </div>

          <div className="">
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2 focus:ring-indigo-500 mb-3 mt-4"
              title="Sign in"
            />
          </div>
         
        </div>
      </form>
    </div>
  </>
  );
};

export default DashAdmin;
