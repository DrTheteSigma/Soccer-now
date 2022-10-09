import { BrowserRouter as Router } from 'react-router-dom';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAuthStatus } from '../hooks/useAuthStatus';

export default function Root() {
    const { isAuth, authStatusLoaded } = useAuthStatus();
    if(!authStatusLoaded) return;
    console.log("auth status: ", isAuth)
    return(
        <Router>
            {isAuth ? <AppStack/> : <AuthStack/>}
        </Router>
    );
}