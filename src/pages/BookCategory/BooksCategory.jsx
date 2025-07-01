import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Rating from "react-rating";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader/Loader";

const BookCategory = () => {
	const { category } = useParams();
	const [books, setBooks] = useState([]);
	
	const { loading,setLoading} = use(AuthContext);


	useEffect(() => {
		axios
			.get(
				`https://library-management-server-alpha-lake.vercel.app/books/category/${category}`
			)
			.then((res) => {
				setBooks(res.data);
				
			})
			.catch((err) => console.error(err));
	}, [category]);

	
		

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold text-center mb-8">{category} Books</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
				{books.map((book) => (
					<div
						key={book._id}
						className="bg-white shadow-lg rounded-xl overflow-hidden p-4"
					>
						<img
							src={book.image}
							alt={book.title}
							className="w-full bg-gray-200 h-48 object-contain mb-4 rounded"
						/>
						<h2 className="text-xl font-bold">{book.title}</h2>
						<p className="text-gray-600">Author: {book.author}</p>
						<p className="text-gray-600">Category: {book.category}</p>
						<p className="text-gray-600">Quantity: {book.quantity}</p>
						<Rating
							readonly
							initialRating={Number(book.rating)}
							emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
							fullSymbol={<span className="text-yellow-400 text-xl">★</span>}
						/>
						<br />

						<Link to={`/bookdetail/${book._id}`}>
							<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
								Details
							</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BookCategory;
