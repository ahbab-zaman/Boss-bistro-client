import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  User Sign In

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   User Sign Up

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Logout

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      console.log("current user", currUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  });

  const userInfo = {
    user,
    loading,
    userLogin,
    createUser,
    logOut,
  };
  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
