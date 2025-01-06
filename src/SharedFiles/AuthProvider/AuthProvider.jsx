import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  //  User Sign In

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   User Sign Up

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Logout

  const logOut = () => {
    return signOut(auth);
  };

  const profileUpdate = (updatedUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedUser);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      console.log("current user", currUser);
      const userInfo = { email: currUser.email };
      if (currUser) {
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
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
    profileUpdate,
    googleSignIn,
  };
  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
