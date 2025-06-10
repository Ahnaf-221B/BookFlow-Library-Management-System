import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user, signOutUser } = use(AuthContext);
	const navigate = useNavigate();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

	// const handleSignOut = () => {
	// 	signOutUser()
	// 		.then(() => {
	// 			navigate("/");
	// 		})
	// 		.catch((error) => {
	// 			console.error("Sign out error:", error);
	// 		});
	// };

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	

	

	return (
		<header className=" shadow-md py-4 px-4 md:px-20 flex justify-between items-center relative">
			<div className="flex items-center space-x-2 flex-shrink-0">
				<img
					src="https://i.postimg.cc/vTnr9Q8m/image.png"
					alt="logo"
					className="hidden md:block w-12 h-12 rounded-full"
				/>
				<span className="text-xl md:text-3xl font-bold text-black ">
					BookFlow
				</span>
			</div>

			<div className="hidden md:flex space-x-4 font-semibold">
				<Link to="/" className="text-black py-2 px-3 hover:text-blue-600">
					Home
				</Link>
				<Link
					to="/allbooks"
					className="text-black  py-2 px-3 hover:text-blue-600"
				>
					All Books
				</Link>
				<Link
					to="/addbooks"
					className="text-black  py-2 px-5 hover:text-blue-600"
				>
					Add Books
				</Link>
				<Link
					to="/borrowedbooks"
					className="text-black  py-2 px-3 hover:text-blue-600"
				>
					Borrowed Books
				</Link>
			</div>

			{/* Mobile menu button */}
			<div className="md:hidden">
				<button
					onClick={toggleMobileMenu}
					type="button"
					className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-white hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded={mobileMenuOpen}
				>
					<span className="sr-only">Open main menu</span>
					{/* Hamburger icon */}
					{!mobileMenuOpen ? (
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 8h16M4 16h16"
							/>
						</svg>
					) : (
						/* Close icon */
						<svg
							className="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</button>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 font-semibold bg-white shadow-md">
						<Link
							to="/"
							className="block px-3 py-2 rounded-md text-black  hover:bg-lime-100 hover:text-lime-600"
						>
							Home
						</Link>
						<Link
							to="/allbooks"
							className="block px-3 py-2 rounded-md text-black  hover:bg-lime-100 hover:text-lime-600"
						>
							All Books
						</Link>
						<Link
							to="/addbooks"
							className="block px-3 py-2 rounded-md text-black  hover:bg-lime-100 hover:text-lime-600"
						>
							Add Books
						</Link>
						<Link
							to="/borrowedbooks"
							className="block px-3 py-2 rounded-md text-black  hover:text-blue-600"
						>
							Borrowed Books
						</Link>
					</div>
				</div>
			)}

			<div className=""></div>

			<div className="space-x-4 flex items-center">
			{!user ? (
				<>
					<Link
						to="/signin"
						className="px-2 py-2 text-black  border border-lime-600 rounded hover:bg-blue-600 hover:text-white"
					>
						Login
					</Link>
					<Link
						to="/signup"
						className="px-2 py-2 text-black  border border-lime-600 rounded hover:bg-blue-600 hover:text-white"
					>
						Register
					</Link>
				</>
			): (
				<>
					<div
						className="relative"
						onMouseEnter={() => setDropdownOpen(true)}
						onMouseLeave={() => setDropdownOpen(false)}
					>
						<button
							onClick={toggleDropdown}
							className="flex items-center space-x-2"
						>
							<img
								// src={user.photoURL || "https://via.placeholder.com/40"}
								alt="User Profile"
								className="w-10 h-10 rounded-full"
							/>
						</button>

						{dropdownOpen && (
							<div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 max-w-xs h-auto z-50">
								<div className="py-2 px-4 text-sm text-gray-700">
									{/* <h2 className="font-bold text-lg">{user.displayName}</h2> */}
									<button className="btn btn-sm bg-red-700 rounded-lg text-left text-lg mt-4 py-3 px-4 text-white hover:bg-red-100">
										Sign Out
									</button>
								</div>
							</div>
						)}
					</div>
				</>
			)}
			</div>
		</header>
	);
};

export default Navbar;
