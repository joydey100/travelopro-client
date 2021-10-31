import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase-init";

// Firebase Initialize
initializeFirebase();

const useFirebase = () => {
  // essential  States
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   Google Provider and Auth
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //   Google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  //   Log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    user,
    googleSignIn,
    logOut,
    loading,
    setLoading,
    error,
    setError,
    setUser,
  };
};

export default useFirebase;
