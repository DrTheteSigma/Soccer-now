import { BrowserRouter as Router } from 'react-router-dom';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useAuthStatus } from '../hooks/useAuthStatus';

export default function Root() {
    const { isAuth, authStatusLoaded } = useAuthStatus();
    if(!authStatusLoaded) return;

    return(
        <Router>
            {isAuth ? <AppStack/> : <AuthStack/>}
        </Router>
    );
}