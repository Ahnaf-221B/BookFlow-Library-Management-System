import React, { use } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Loader from "../pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);

	const location = useLocation();
	console.log(location);

	if (loading) {
		return <Loader></Loader>;
	}
	if (!user) {
		return <Navigate  state={location.pathname} to="/signin"></Navigate>;
	}
	return children;
};

export default PrivateRoute;
