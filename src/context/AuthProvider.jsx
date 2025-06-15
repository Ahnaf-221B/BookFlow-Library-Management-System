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

    const createUser = (email, pass) => {
			return createUserWithEmailAndPassword(auth, email, pass),
			setLoading(true);
		};



	const registerGoogle = () => {
		return signInWithPopup(auth, provider), setLoading(true);
	};

	const signInUser = (email, pass) => {
		return signInWithEmailAndPassword(auth, email, pass), setLoading(true);
	};
    const signOutUser = () => {
			return signOut(auth), setLoading(true);
		};

    const updateUser = (updateData) => {
			return updateProfile(auth.currentUser, updateData);
		};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
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
