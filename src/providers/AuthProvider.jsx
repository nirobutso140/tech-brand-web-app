import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     
     const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('current value of the current user: ',currentUser );
        setUser(currentUser)
        setLoading(false)
    })
    return () =>{
        unSubscribe()
    }
   }, [])

    const userInfo = {
         user,
         createUser,
         loading,
         loginUser,
         logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;