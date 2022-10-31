import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React ,{useEffect,useState} from "react";

const Blog = ({email, password,fullname}) => {
 
 const [user , setUser] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:3000/api/auth/alluser")
    .then(res=>{
        setUser(res.data)
        console.log(res.data)
    }).catch((error) => {
        console.log(error);
    })
 },[])
 
//  if(!user) return null
//     return (
//     <div>
//         {console.log("ach hada")}
//     </div>
//  )

};

export default Blog;