import { useState, useEffect } from "react";
import { auth } from "../components/Firebase";
import { onAuthStateChanged } from "firebase/auth";

/**
 * The useAuthStatus hook subscribes and listens for changes to the authentication
 * state of the user and returns an object with two boolean values indicating the
 * current auth status and whether the authentication status has finished loading.
 * Unsusbcribes on component unmounting to avoid memory leaks.
 *
 * @returns The AuthStatus of the current user and whether it finished loading or not.
 */
export const useAuthStatus = () => {
    const [ isAuth, setAuthStatus ] = useState(false);
    const [ authStatusLoaded, setLoaded ] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) { 
                setAuthStatus(true);
                setLoaded(true);
            } else {
                setAuthStatus(false);
                setLoaded(true);
            }
        });
        return unsubscribe;
    }, []);

    return { isAuth, authStatusLoaded };
};