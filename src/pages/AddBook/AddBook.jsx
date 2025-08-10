import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBook = () => {
	const {
		register,
		handleSubmit,

		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const response = await axios.post(
			"https://library-management-server-alpha-lake.vercel.app/books",
			data
		);

		console.log("Book addded successfully", response.data);
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Book Added Successfully",
			showConfirmButton: false,
			timer: 1500,
		});

		reset();
	};

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
			<title>AddBook</title>
			<h2 className="text-2xl font-bold mb-4 text-center">Add a New Book</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{/* Book Cover Image */}
				<div>
					<label className="block font-semibold">Book Cover Image</label>
					<input
						type="text"
						placeholder="https://example.com/image.jpg"
						{...register("image", { required: true })}
						className="w-full border px-3 py-2 rounded"
					/>
					{errors.image && (
						<span className="text-red-500">Book cover image is required.</span>
					)}
				</div>

				{/* Book Title */}
				<div>
					<label className="block font-semibold">Title of the Book</label>
					<input
						type="text"
						{...register("title", { required: true })}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter book title"
					/>
					{errors.title && (
						<span className="text-red-500">Title is required.</span>
					)}
				</div>

				{/* Quantity */}
				<div>
					<label className="block font-semibold">Quantity</label>
					<input
						type="number"
						{...register("quantity", { required: true })}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter quantity"
					/>
					{errors.quantity && (
						<span className="text-red-500">Enter a valid Quantity.</span>
					)}
				</div>

				{/* Author Name */}
				<div>
					<label className="block font-semibold">Author Name</label>
					<input
						type="text"
						{...register("author", { required: true })}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter author name"
					/>
					{errors.author && (
						<span className="text-red-500">Author name is required.</span>
					)}
				</div>

				{/* Category */}
				<div>
					<label className="block font-semibold">Category</label>
					<select
						{...register("category", { required: true })}
						className="w-full border px-3 py-2 rounded"
					>
						<option value="">Select category</option>
						<option value="Novel">Novel</option>
						<option value="Thriller">Thriller</option>
						<option value="History">History</option>

						<option value="Sci-Fi">Sci-Fi</option>
					</select>
					{errors.category && (
						<span className="text-red-500">Category is required.</span>
					)}
				</div>

				{/* Short Description */}
				<div>
					<label className="block font-semibold">Short Description</label>
					<textarea
						{...register("shortDescription", { required: true })}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter a short description"
					></textarea>
					{errors.description && (
						<span className="text-red-500">Description is required.</span>
					)}
				</div>

				{/* Rating */}
				<div>
					<label className="block font-semibold">Rating (1–5)</label>
					<input
						type="number"
						{...register("rating", {
							required: true,
							min: 1,
							max: 5,
						})}
						className="w-full border px-3 py-2 rounded"
						placeholder="Enter rating"
					/>
					{errors.rating && (
						<span className="text-red-500">
							Enter a rating between 1 and 5.
						</span>
					)}
				</div>

				{/* Static Book Content Info */}
				{/* <div className="bg-gray-100 p-3 rounded">
					<p className="text-sm text-gray-700">
						<strong>Book Content:</strong> This section provides more
						information about the book that will be added to the system. Please
						make sure all details are accurate.
					</p>
				</div> */}

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
				>
					Add Book
				</button>
			</form>
		</div>
	);
};

export default AddBook;
