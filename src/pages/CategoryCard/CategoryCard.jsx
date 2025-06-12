import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = () => {
    const navigate = useNavigate();

		const handleNavigate = (category) => {
			navigate(`/category/${category}`);
		};

	return (
		<div>
			<h1 className="flex items-center justify-center font-bold text-3xl mt-10 mb-10">
				Categories
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
				<div
					onClick={() => handleNavigate("Novel")}
					className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
				>
					<img
						src="https://i.postimg.cc/XvnNfv71/image.png"
						alt="Novel"
						className="w-full h-48 object-cover"
					/>
					<div className="bg-white p-4 text-center">
						<h2 className="text-xl font-semibold text-gray-800">Novel</h2>
					</div>
				</div>

				{/* Thriller Card */}
				<div
					onClick={() => handleNavigate("Thriller")}
					className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
				>
					<img
						src="https://i.postimg.cc/7YQStpTN/image.png"
						alt="Thriller"
						className="w-full h-48 object-cover"
					/>
					<div className="bg-white p-4 text-center">
						<h2 className="text-xl font-semibold text-gray-800">Thriller</h2>
					</div>
				</div>

				{/* History Card */}
				<div
					onClick={() => handleNavigate("History")}
					className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
				>
					<img
						src="https://i.postimg.cc/xj6mqWgS/image.png"
						alt="History"
						className="w-full h-48 object-cover"
					/>
					<div className="bg-white p-4 text-center">
						<h2 className="text-xl font-semibold text-gray-800">History</h2>
					</div>
				</div>

				{/* Sci-Fi Card */}
				<div
					onClick={() => handleNavigate("Sci-Fi")}
					className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer"
				>
					<img
						src="https://i.postimg.cc/C1FZxNq1/image.png"
						alt="Sci-Fi"
						className="w-full h-48 object-cover"
					/>
					<div className="bg-white p-4 text-center">
						<h2 className="text-xl font-semibold text-gray-800">Sci-Fi</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
