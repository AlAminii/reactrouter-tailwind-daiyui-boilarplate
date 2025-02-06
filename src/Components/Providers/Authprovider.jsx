import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password )
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const userLogout = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('currentUser', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authinfo = {
        user,
        userLogout,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;