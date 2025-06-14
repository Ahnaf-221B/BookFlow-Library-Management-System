import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBooks = () => {
	const [books, setBooks] = useState([]);
	const [showAll, setShowAll] = useState(false);
	const [showAvailableOnly, setShowAvailableOnly] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:3000/books")
			.then((res) => {
				setBooks(res.data);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
			});
	}, []);

	
	const filteredBooks = showAvailableOnly
		? books.filter((book) => book.quantity > 0)
		: books;


	const displayedBooks = showAll ? filteredBooks : filteredBooks.slice(0, 8);

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold text-center mb-8">All Books</h1>

			<div className="flex justify-center gap-4 mb-6">
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

				
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{displayedBooks.map((book) => (
					<div
						key={book._id}
						className="bg-white shadow-lg rounded-xl overflow-hidden p-4"
					>
						<img
							src={book.image}
							alt={book.title}
							className="w-full h-48 object-contain bg-gray-200 mb-4"
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
