import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Spinner = () => (
	<div className="flex justify-center items-center h-64">
		<div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
	</div>
);


const AllBooks = () => {
	const [books, setBooks] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [showAvailableOnly, setShowAvailableOnly] = useState(false);
	const [viewMode, setViewMode] = useState("card"); 
	const [loading, setLoading] = useState(true);
	const {user} =use(AuthContext);

	useEffect(() => {
		axios
			.get("http://localhost:3000/books", {
				headers: { authorization: `Bearer ${user.accessToken}` },
			})
			.then((res) => {
				setBooks(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
			});
	}, []);

	const filteredBooks = showAvailableOnly
		? books.filter((book) => book.quantity > 0)
		: books;

	const displayedBooks = showAll ? filteredBooks : filteredBooks.slice(0, 8);

	if (loading) return <Spinner />;

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold text-center mb-8">All Books</h1>

			<div className="flex flex-wrap justify-center gap-4 mb-6">
				<button
					onClick={() => {
						setShowAvailableOnly((prev) => !prev);
						setShowAll(false);
					}}
					className={`px-4 py-2 rounded ${
						showAvailableOnly ? "bg-yellow-600" : "bg-yellow-500"
					} text-white`}
				>
					{showAvailableOnly ? "Show All Books" : "Show Available Books"}
				</button>

				<select
					value={viewMode}
					onChange={(e) => setViewMode(e.target.value)}
					className="px-4 py-2 rounded bg-gray-200 text-gray-800"
				>
					<option value="card">Card View</option>
					<option value="table">Table View</option>
				</select>
			</div>

			{/* Card View */}
			{viewMode === "card" && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{displayedBooks.map((book) => (
						<div
							key={book._id}
							className="bg-white shadow-lg rounded-xl overflow-hidden p-4"
						>
							<img
								src={book.image}
								alt={book.title}
								className="w-full h-48 object-contain bg-gray-200 rounded mb-4"
							/>
							<h2 className="text-xl font-bold">{book.title}</h2>
							<p className="text-gray-600">Author: {book.author}</p>
							<p className="text-gray-600">Category: {book.category}</p>
							<p className="text-gray-600">Quantity: {book.quantity}</p>

							<div className="flex items-center gap-1 mt-2">
								{[...Array(5)].map((_, i) => (
									<FaStar
										key={i}
										className={`${
											i < book.rating ? "text-yellow-500" : "text-gray-300"
										}`}
									/>
								))}
							</div>

							<Link to={`/update-book/${book._id}`}>
								<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
									Update
								</button>
							</Link>
						</div>
					))}
				</div>
			)}

			{/* Table View */}
			{viewMode === "table" && (
				<div className="overflow-x-auto">
					<table className="min-w-full border border-gray-200 bg-white">
						<thead>
							<tr className="bg-gray-100 text-left">
								<th className="px-4 py-2 border">Image</th>
								<th className="px-4 py-2 border">Title</th>
								<th className="px-4 py-2 border">Author</th>
								<th className="px-4 py-2 border">Category</th>
								<th className="px-4 py-2 border">Quantity</th>
								<th className="px-4 py-2 border">Rating</th>
								<th className="px-4 py-2 border">Action</th>
							</tr>
						</thead>
						<tbody>
							{displayedBooks.map((book) => (
								<tr key={book._id} className="hover:bg-gray-50">
									<td className="px-4 py-2 border">
										<img
											src={book.image}
											alt={book.title}
											className="w-16 h-16 object-contain"
										/>
									</td>
									<td className="px-4 py-2 border">{book.title}</td>
									<td className="px-4 py-2 border">{book.author}</td>
									<td className="px-4 py-2 border">{book.category}</td>
									<td className="px-4 py-2 border">{book.quantity}</td>
									<td className="px-4 py-2 border">
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<FaStar
													key={i}
													className={`${
														i < book.rating
															? "text-yellow-500"
															: "text-gray-300"
													}`}
												/>
											))}
										</div>
									</td>
									<td className="px-4 py-2 border">
										<Link to={`/update-book/${book._id}`}>
											<button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
												Update
											</button>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			{filteredBooks.length > 8 && !showAll && (
				<div className="flex justify-center mt-8">
					<button
						onClick={() => setShowAll(true)}
						className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
					>
						See All
					</button>
				</div>
			)}
		</div>
	);
};

export default AllBooks;
