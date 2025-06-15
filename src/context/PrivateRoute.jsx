import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loader from "../pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
	const { user ,loading} = use(AuthContext);

	const location = useLocation();
	console.log(location);

	if (user && user?.email) {
		return children;
	}
	if( loading) {
  return <Loader></Loader>;
 }
	
	return <Navigate state={location.pathname} ></Navigate>;
};

export default PrivateRoute;
