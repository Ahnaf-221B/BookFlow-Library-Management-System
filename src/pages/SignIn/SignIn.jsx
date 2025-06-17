import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast, Bounce } from "react-toastify";

const SignIn = () => {
	const location = useLocation(); 
	const navigate = useNavigate(); 
	const { signInUser, registerGoogle } = useContext(AuthContext);
	const emailRef = useRef();

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const pass = e.target.password.value;

		signInUser(email, pass)
			.then(() => {
				toast.success("Log in successful", {
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
				toast.warn("Invalid mail or password", {
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
				console.log(error);
			});
	};

	// Handle Google Login
	const handleGoogleLogin = () => {
		registerGoogle()
			.then(() => {
				
				toast.success("Log in successful", {
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
				console.log(navigate);
				
			})
			.catch((error) => {
				toast.error(`Google login failed: ${error.message}`, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center pt-20 mb-35">
			<form
				onSubmit={handleLogin}
				className="mx-auto fieldset bg-base-200 border-base-300 rounded-box w-full sm:w-96 border p-4"
			>
				<legend className="fieldset-legend text-3xl">Login</legend>

				<label className="label">Email</label>
				<input
					type="email"
					name="email"
					ref={emailRef}
					required
					className="input w-full"
					placeholder="Email"
				/>

				<label className="label">Password</label>
				<input
					type="password"
					className="input w-full"
					name="password"
					required
					placeholder="Password"
					minLength={8}
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
					title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
				/>
				<div>
					<a className="link link-hover" href="">
						Forget password?
					</a>
				</div>

				<button className="btn btn-neutral mt-4 w-full sm:w-auto">Login</button>
				<p className="flex justify-center items-center font-semibold text-lg">
					{" "}
					or
				</p>
				<button
					onClick={handleGoogleLogin}
					className="btn bg-white text-black border-[#e5e5e5] w-full sm:w-auto"
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
			<p className="mt-2">
				New to website??{" "}
				<Link to="/signup" className="text-red-700">
					Register
				</Link>
			</p>
		</div>
	);
};

export default SignIn;
