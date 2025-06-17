import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.config";

import {
    createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
	const provider = new GoogleAuthProvider();

	const [user, setUser] = useState(null);
	 const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {setLoading(true);
			return createUserWithEmailAndPassword(auth, email, pass)
			
		};



	const registerGoogle = () => { 
		setLoading(true);
		return signInWithPopup(auth, provider)
	};

	const signInUser = (email, pass) => {setLoading(true);
		return signInWithEmailAndPassword(auth, email, pass) 
	};
    const signOutUser = () => { 
			setLoading(true);
			return signOut(auth)
		};

    const updateUser = (updateData) => {
			return updateProfile(auth.currentUser, updateData);
		};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
   setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const userInfo = {
		user,
		signInUser,
		registerGoogle,
		createUser,
		updateUser,
		loading,
  setLoading,
		signOutUser,
	};

	return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
