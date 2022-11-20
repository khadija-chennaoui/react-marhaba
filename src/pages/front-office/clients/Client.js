import React from "react";
import axios from "axios";
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
export default function Client() {
  return (
    <>
      <div class="bg-indigo-50 mt-8">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span class="block mb-6">Hi Dear {localStorage.getItem("fullname")} </span>
            <span class="block text-indigo-600">Your Email is : ' {localStorage.getItem("email")} '</span>
            <span class="block mt-6">Ton Role est : {localStorage.getItem("role")}</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
            <button  onClick={Logout} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Logout</button> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
