import { useCurrentUser } from '../hooks/useCurrentUser';
import { Routes, Route } from 'react-router-dom';
import Mainpage from "../components/Mainpage"
import CreatingGame from "../components/CreatingGame";
import Dashboard from '../components/Dashboard';

export default function AppStack(){
    // const user = useCurrentUser(); 
    return (
       <>
            <Routes>   
                <Route path="/" element={<Mainpage/>}></Route>
                <Route path="/create" element={<CreatingGame/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </>
    )
}

