import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
	const { user } = useContext(AuthContext);
	const [borrowedBooks, setBorrowedBooks] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/books", {
				headers: { authorization: `Bearer ${user.accessToken}` },
			})
			.then((res) => {
				const filtered = res.data.filter((book) =>
					(book.borrowed || []).some((b) => b.userEmail === user.email)
				);
				setBorrowedBooks(filtered);
			});
	}, [user.email]);

	const handleReturn = async (bookId) => {
		await axios.patch(`http://localhost:3000/books/return/${bookId}`, {
			userEmail: user.email,
		});
		setBorrowedBooks((prev) => prev.filter((book) => book._id !== bookId));
		Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Book Returned Successfully",
						showConfirmButton: false,
						timer: 1500,
					});
	};

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<h2 className="text-2xl font-bold mb-6">Your Borrowed Books</h2>
			{borrowedBooks.length === 0 ? (
				<p>No borrowed books.</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{borrowedBooks.map((book) => {
						const info = book.borrowed.find((b) => b.userEmail === user.email);
						return (
							<div key={book._id} className="bg-white p-4 shadow rounded">
								<img
									src={book.image}
									alt={book.title}
									className="w-full h-48 object-contain mb-2 bg-gray-200 rounded"
								/>
								<h3 className="text-xl font-semibold">{book.title}</h3>
								<p>Category: {book.category}</p>
								<p>
									Borrowed: {new Date(info.borrowDate).toLocaleDateString()}
								</p>
								<p>
									Return by: {new Date(info.returnDate).toLocaleDateString()}
								</p>
								<button
									className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
									onClick={() => handleReturn(book._id)}
								>
									Return
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default BorrowedBooks;
