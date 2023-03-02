import { createContext, useContext} from 'react';
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase'

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error ('There is not auth provider')
    return context
}

const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}

export const logOut = () => {
    return signOut(auth)
}

export function AuthProvider({ children }) {
    const user = {
        login: true,
    }
    return (
        <authContext.Provider value={{ user, loginWithGoogle, logOut}}>
            {children}
        </authContext.Provider>
    )
}

