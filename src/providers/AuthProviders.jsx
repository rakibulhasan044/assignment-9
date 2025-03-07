import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, updateEmail, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const profileUpdate = (name, photourl) => {
        return updateProfile( auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }
    
    const emailUpdate = (email) => {
        return updateEmail(auth.currentUser, email)
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
        setUser,
        loader,
        createUser,
        googleLogin,
        githubLogin,
        signIn,
        profileUpdate,
        emailUpdate,
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