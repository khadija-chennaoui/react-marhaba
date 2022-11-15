import {Outlet , Navigate} from'react-router-dom'

export default function PrivateRole(params) {

    return (
       (localStorage.getItem("role")==="Admin") ? <Outlet/>:<Navigate to="Login"/>
    )
}