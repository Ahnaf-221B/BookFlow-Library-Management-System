import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const BookDetails = () => {
	const { id } = useParams();
	const [book, setBook] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [returnDate, setReturnDate] = useState("");
	const [loading, setLoading] = useState(false);
        const { user } = use(AuthContext);

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

	// Handle borrow form submission
	// const handleBorrow = async (e) => {
	// 	e.preventDefault();

	// 	if (!returnDate) {
	// 		alert("Please select a return date.");
	// 		return;
	// 	}

	// 	if (book.quantity <= 0) {
	// 		alert("Sorry, this book is not available to borrow.");
	// 		return;
	// 	}

	// 	setLoading(true);

	// 	try {
	// 		// 1. Update the book quantity on the server (reduce by 1)
	// 		const updatedBookRes = await axios.patch(
	// 			`http://localhost:3000/books/${id}`,
	// 			{
	// 				quantity: book.quantity - 1,
	// 			}
	// 		);

	// 		setBook(updatedBookRes.data);

	// 		// 2. Add to borrowed books list on server
	// 		await axios.post(`http://localhost:3000/borrowedBooks`, {
	// 			bookId: book._id || book.id || id,
	// 			title: book.title,
	// 			author: book.author,
	// 			image: book.image,
	// 			userId: user.id,
	// 			userName: user.displayName,
	// 			userEmail: user.email,
	// 			returnDate,
	// 		});

	// 		alert("Book borrowed successfully!");
	// 		setIsModalOpen(false);
	// 		setReturnDate("");
	// 	} catch (error) {
	// 		console.error("Error borrowing book:", error);
	// 		alert("Failed to borrow the book. Please try again.");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 relative">
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

			<button
				onClick={() => setIsModalOpen(true)}
				disabled={book.quantity === 0}
				className={`px-6 py-2 rounded text-white ${
					book.quantity === 0
						? "bg-gray-400 cursor-not-allowed"
						: "bg-blue-600 hover:bg-blue-700"
				}`}
			>
				Borrow
			</button>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="backdrop-blur-sm bg-black/40 fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="bg-white rounded-lg p-6 w-96"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-xl font-bold mb-4">Borrow "{book.title}"</h2>

						<form >
							<div className="mb-3">
								<label className="block mb-1 font-semibold" htmlFor="name">
									Name
								</label>
								<input
									id="name"
									type="text"
									value={user.displayName}
									readOnly
									className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
								/>
							</div>

							<div className="mb-3">
								<label className="block mb-1 font-semibold" htmlFor="email">
									Email
								</label>
								<input
									id="email"
									type="email"
									value={user.email}
									readOnly
									className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
								/>
							</div>

							<div className="mb-4">
								<label
									className="block mb-1 font-semibold"
									htmlFor="returnDate"
								>
									Return Date
								</label>
								<input
									id="returnDate"
									type="date"
									value={returnDate}
									onChange={(e) => setReturnDate(e.target.value)}
									required
									className="w-full border border-gray-300 rounded px-3 py-2"
									min={new Date().toISOString().split("T")[0]}
								/>
							</div>

							<div className="flex justify-end gap-3">
								<button
									type="button"
									onClick={() => setIsModalOpen(false)}
									className="px-4 py-2 border rounded"
								>
									Cancel
								</button>

								<button
									type="submit"
									disabled={loading}
									className={`px-4 py-2 rounded text-white ${
										loading
											? "bg-gray-400 cursor-not-allowed"
											: "bg-blue-600 hover:bg-blue-700"
									}`}
								>
									{loading ? "Borrowing..." : "Confirm Borrow"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookDetails;
