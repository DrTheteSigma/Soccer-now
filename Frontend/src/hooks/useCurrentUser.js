import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import axios from "axios";


export const useCurrentUser = () => {
    const [user, setUser] = useState();
    

    useEffect( () => {
        
    const fetchUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/v1/users/getById?id=${auth.currentUser.uid}`)
            setUser(result.data)
        } 
        
        catch (error) {
            console.error(error);
        }
    }
    fetchUser()        


    }, [])
    
    return user;
};