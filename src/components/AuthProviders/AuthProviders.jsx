import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
// import { getAuth } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create User Email and password
    const createUser = (email, password) => {
        // for path replace
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user Email and Password
    const logInUserEmailPassword = (email, password) => {
        // for path replace
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign with Google
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github SignIn
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // Sign Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // update User and url
    const updateUser = (user, name, url) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: url
        })
    }

    // observe user auth state (when state change then catch it)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        logInUserEmailPassword,
        signInGoogle,
        githubSignIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;