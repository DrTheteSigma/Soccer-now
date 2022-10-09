// import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from "./Signup";
import App from "../App";

export default function AuthStack(){
    return (
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create-account" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}