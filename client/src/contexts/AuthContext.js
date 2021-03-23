import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ jwt, children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    console.log(isAuthenticated)
    if (!isAuthenticated) return
    alert('Auth Changed')
  }, [isAuthenticated])


  // useEffect(() => {
  //   setUser({ id: 1, name: 'phil', email: 'phil@example.com' })
  //   setIsAuthenticated(true)
  // }, [jwt])  // re-run this everything the value of jwt changes. 


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser, setIsAuthenticated }}>
      {isAuthenticated && `welcome ${user?.name}`}
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used within a AuthContext.Provider"
    );
  }

  return context;
}