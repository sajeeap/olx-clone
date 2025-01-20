import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Children, createContext, useEffect, useState } from "react";

import { auth, db } from "../utils/FirebaseConfig.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = async (userName, email, phone, password) => {
    try {
      let userDetails = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(" userDetails     ",userDetails)

      await updateProfile(userDetails.user, {
        displayName: userName,
      });

      await updateProfile(userDetails.user, {
        displayName: userName,
      });

      await addDoc(collection(db, "users"), {
        id: userDetails.user.uid,
        userName,
        email,
        phone,
      });

      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

const logIn = async(email, password) => {
    try{
        await signInWithEmailAndPassword(auth,
            email,
            password
        );
        return { success: true }
    } catch (error) {
        console.log(error);
        return { success: false };
    }
};

const logOut = async () => {
    await signOut(auth);
};

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return () => {
        unsubscribe();
    };
}, []);

return (
    <AuthContext.Provider value={{user, signUp , logIn, logOut}}>
    {children}
    </AuthContext.Provider>
)
};

export default AuthContext
