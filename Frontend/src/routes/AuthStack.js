import { Routes, Route } from 'react-router-dom';
import Signin from "../components/Login";
import Signup from "../components/Signup";
import App from "../App";

export default function AuthStack(){
    return (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create-account" element={<Signup/>}></Route>
            {/* <Route path="/login" element={<Signin/>}></Route> */}
        </Routes>
    )
}