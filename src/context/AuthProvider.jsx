import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../firebase/firebase.config";

import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
	const provider = new GoogleAuthProvider();

	const [user, setUser] = useState(null);

	const registerGoogle = () => {
		return signInWithPopup(auth, provider);
	};

	const signInUser = (email, pass) => {
		return signInWithEmailAndPassword(auth, email, pass);
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
	};

	return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
