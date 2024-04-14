import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=> {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current user: ', currentUser);
            setLoader(false)
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        logOut
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node,
}
export default AuthProviders;