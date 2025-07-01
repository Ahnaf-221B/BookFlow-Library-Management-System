import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);
	const { user, signOutUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOutUser()
			.then(() => {
				navigate("/");
			})
			.catch((err) => console.error("Sign out error", err));
	};

	return (
		<header className="sticky top-0 z-50 bg-gray-300 shadow-md py-4 px-4 md:px-12">
			{/* Wrapper Flex */}
			<div className="flex justify-between items-center">
				{/* LEFT SIDE: Logo + Title (mobile & desktop) */}
				<div className="flex items-center space-x-2 md:order-1">
					{/* Hamburger (only mobile) */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="p-2 rounded-md text-black hover:bg-lime-500 focus:outline-none"
						>
							{mobileMenuOpen ? (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 8h16M4 16h16"
									/>
								</svg>
							)}
						</button>
					</div>
					{/* Logo & Title */}
					<img
						src="https://i.postimg.cc/m2KczGjX/image.png"
						alt="logo"
						className="w-10 h-10 rounded-full hidden md:block"
					/>
					<span className="text-xl md:text-2xl font-bold text-black">
						BookFlow
					</span>
				</div>

				{/* CENTER (Only desktop): Nav Links */}
				<nav className="hidden md:flex space-x-6 font-semibold md:order-2">
					<Link to="/" className="text-black hover:text-blue-600">
						Home
					</Link>
					<Link to="/allbooks" className="text-black hover:text-blue-600">
						All Books
					</Link>
					<Link to="/aboutus" className="text-black hover:text-blue-600">
						About Us
					</Link>
					{user && (
						<>
							<Link to="/addbooks" className="text-black hover:text-blue-600">
								Add Books
							</Link>
							<Link
								to="/borrowedbooks"
								className="text-black hover:text-blue-600"
							>
								Borrowed Books
							</Link>
						</>
					)}
				</nav>

				{/* RIGHT: User Avatar or Login/Register */}
				<div className="flex items-center space-x-2 md:order-3">
					{!user ? (
						<>
							<Link
								to="/signin"
								className="text-black border border-lime-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white"
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="text-black border border-lime-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white"
							>
								Register
							</Link>
						</>
					) : (
						<div className="relative group">
							<img
								src={user.photoURL || "https://via.placeholder.com/40"}
								alt="User"
								className="w-10 h-10 rounded-full cursor-pointer"
								onClick={() => setMobileUserMenuOpen(!mobileUserMenuOpen)}
							/>
							{/* Dropdown (desktop only) */}
							<div className="hidden md:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
								<div className="px-4 py-3 text-sm text-gray-700">
									<div className="font-bold text-lg">{user.displayName}</div>
									<button
										onClick={handleSignOut}
										className="mt-3 w-full text-left bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
									>
										Sign Out
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{mobileMenuOpen && (
				<div className="md:hidden mt-4 bg-white rounded-lg shadow-md px-4 py-3 space-y-2 font-semibold">
					<Link
						to="/"
						onClick={() => setMobileMenuOpen(false)}
						className="block text-black hover:text-blue-600"
					>
						Home
					</Link>
					<Link
						to="/allbooks"
						onClick={() => setMobileMenuOpen(false)}
						className="block text-black hover:text-blue-600"
					>
						All Books
					</Link>
					<Link
						to="/aboutus"
						onClick={() => setMobileMenuOpen(false)}
						className="block text-black hover:text-blue-600"
					>
						About Us
					</Link>
					{user ? (
						<>
							<Link
								to="/addbooks"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-black hover:text-blue-600"
							>
								Add Books
							</Link>
							<Link
								to="/borrowedbooks"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-black hover:text-blue-600"
							>
								Borrowed Books
							</Link>
							<button
								onClick={() => {
									handleSignOut();
									setMobileUserMenuOpen(false);
									setMobileMenuOpen(false);
								}}
								className="w-full text-left text-red-700 hover:text-red-500 mt-2"
							>
								Sign Out
							</button>
						</>
					) : (
						<>
							<Link
								to="/signin"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-black hover:text-blue-600"
							>
								Login
							</Link>
							<Link
								to="/signup"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-black hover:text-blue-600"
							>
								Register
							</Link>
						</>
					)}
				</div>
			)}
		</header>
	);
};

export default Navbar;
