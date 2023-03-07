import {createContext, useContext} from 'react'
// permite saber si el usuario esta logeado o no 
// crear un estado por un archivo externo


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error ('there is not auth provider')
  return context
}

export function AuthProvider({children}) {
  const user ={
    login: true,
  };


  return (
  <authContext.Provider value = {{user }}>
    {children} 
    </authContext.Provider>;
  )
}