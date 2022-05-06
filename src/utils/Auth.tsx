// import React, { useState, createContext, useContext } from "react";

// import { Provider } from "react-redux";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }: RequireAuthProps) => {
//   const [user, setUser] = useState(userState);

//   const login = (username: string) => {
//     // console.log(user);
//     setUser(() => {
//       return { ...user, username };
//     });
//   };

//   const logout = () => {
//     // console.log(user);
//     setUser(() => {
//       return { username: "", password: "" };
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext) as any;
// };
