import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const BookDetails = () => {
	const { id } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/books/${id}`)
			.then((res) => {
				setBook(res.data);
			})
			.catch((err) => console.error("Error fetching book details:", err));
	}, [id]);

	if (!book) {
		return (
			<div className="text-center mt-10 text-lg">Loading book details...</div>
		);
	}

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
			<img
				src={book.image}
				alt={book.title}
				className="w-full bg-gray-100 h-64 object-contain rounded-md mb-6"
			/>
			<h1 className="text-3xl font-bold mb-2">{book.title}</h1>
			<p className="text-gray-700 mb-1">
				Author: <span className="font-medium">{book.author}</span>
			</p>
			<p className="text-gray-700 mb-1">Category: {book.category}</p>
			<p className="text-gray-700 mb-1">Quantity Available: {book.quantity}</p>

			<div className="flex items-center gap-1 my-2">
				{[...Array(5)].map((_, i) => (
					<FaStar
						key={i}
						className={`${
							i < book.rating ? "text-yellow-500" : "text-gray-300"
						}`}
					/>
				))}
			</div>

			<p className="text-gray-800 my-4">{book.shortDescription}</p>

			<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
				Borrow
			</button>
		</div>
	);
};

export default BookDetails;
