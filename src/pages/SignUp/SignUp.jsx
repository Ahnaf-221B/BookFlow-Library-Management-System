import React, { use } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
	//   const [success, setsuccess] = useState(false);
	//   const [errormsg, seterrormsg] = useState("");
	const [showpass, setshowpass] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const { createUser, registerGoogle, updateUser } = use(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const photo = e.target.photo.value;
		const email = e.target.email.value;
		const pass = e.target.password.value;

		console.log(name, photo, email, pass);
		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
		if (!passwordRegex.test(pass)) {
			toast.error(
				"Password must be at least 6 characters, include uppercase, lowercase, and a number.",
				{
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				}
			);
			return;
		}

		createUser(email, pass)
			.then((result) => {
				console.log(result),
					updateUser({
						displayName: name,
						photoURL: photo,
					})
						.then(() => {
							toast.success("User registered successfully!", {
								position: "top-right",
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
								transition: Bounce,
							});
						})
						.catch((err) => {
							console.log(err);

							toast.error(`Profile update failed: ${err.message}`, {
								position: "top-right",
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
								transition: Bounce,
							});
						});

				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				console.log(error);
				toast.error(`Registration failed: ${error.message}`, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
			});
	};

	const handleGoogleLogin = () => {
		registerGoogle()
			.then((result) => {
				console.log(result);
				toast.success("Log in with google successful", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center pt-15 ">
			<form
				action=""
				className="flex flex-col gap-2 bg-base-200 border-2 p-4 rounded-lg shadow-md"
				onSubmit={handleRegister}
			>
				<legend className="fieldset-legend text-3xl">Registration</legend>
				<label className="text-xs" htmlFor="">
					Name
				</label>
				<input
					type="text"
					name="name" // Add this name attribute
					className="input "
					placeholder="Enter your name"
					required
				/>
				<label className="text-xs" htmlFor="">
					Photo
				</label>
				<input
					type="text"
					name="photo" // Add this name attribute
					className="input "
					placeholder="photo url"
					required
				/>
				<label className="label">Email</label>
				<input
					// ref={emailref}
					type="email"
					name="email"
					required
					className="input"
					placeholder="Email"
				/>
				<label className="text-xs" htmlFor="">
					Password
				</label>
				<label className="input validator">
					<svg
						className="h-[1em] opacity-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g
							strokeLinejoin="round"
							strokeLinecap="round"
							strokeWidth="2.5"
							fill="none"
							stroke="currentColor"
						>
							<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
							<circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
						</g>
					</svg>
					<div className="relative flex items-center justify-between">
						<input
							type={showpass ? "text" : "password"}
							name="password" // Add this name attribute
							required
							placeholder="Password"
							minlength="8"
						/>
						<button
							onClick={() => {
								setshowpass(!showpass);
							}}
							className="ml-5"
						>
							{showpass ? <FaEyeSlash /> : <FaEye></FaEye>}
						</button>
					</div>
				</label>

				<p className="validator-hint hidden">
					Must be more than 6 characters, including
					<br />
					At least one number <br />
					At least one lowercase letter <br />
					At least one uppercase letter
				</p>

				<br />

				<button className="btn btn-primary" type="submit">
					Register
				</button>

				<p className="flex justify-center items-center font-semibold text-lg">
					{" "}
					or
				</p>
				<button
					onClick={handleGoogleLogin}
					className="btn bg-white text-black border-[#e5e5e5]"
				>
					<svg
						aria-label="Google logo"
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<g>
							<path d="m0 0H512V512H0" fill="#fff"></path>
							<path
								fill="#34a853"
								d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
							></path>
							<path
								fill="#4285f4"
								d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
							></path>
							<path
								fill="#fbbc02"
								d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
							></path>
							<path
								fill="#ea4335"
								d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
							></path>
						</g>
					</svg>
					Login with Google
				</button>
			</form>
			<p className="pt-5 pb-5">
				Already have an acccount?{" "}
				<Link to="/signin" className="ml-3 text-red-700 font-semibold">
					LogIn
				</Link>
			</p>
		</div>
	);
};

export default SignUp;
