import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateBook = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		axios
			.get(
				`https://library-management-server-alpha-lake.vercel.app/books/${id}`
			)
			.then((res) => {
				reset(res.data);
				setLoading(false);
			});
	}, [id, reset]);

	const onSubmit = async (data) => {
		try {
			await axios.put(
				`https://library-management-server-alpha-lake.vercel.app/books/${id}`,
				{
					...data,
					rating: parseInt(data.rating),
				}
			);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Book Updated Successfully",
				showConfirmButton: false,
				timer: 1500,
			});
			navigate("/allbooks");
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) return <div className="text-center mt-10">Loading...</div>;

	return (
		<div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
			<h2 className="text-2xl font-bold mb-4">Update Book</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label className="block font-semibold mb-1">Image URL</label>
					<input
						type="text"
						{...register("image", { required: "Image URL is required" })}
						className="w-full border px-3 py-2 rounded"
					/>
					{errors.image && (
						<p className="text-red-500 text-sm">{errors.image.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold mb-1">Book Title</label>
					<input
						type="text"
						{...register("title", { required: "Title is required" })}
						className="w-full border px-3 py-2 rounded"
					/>
					{errors.title && (
						<p className="text-red-500 text-sm">{errors.title.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold mb-1">Author Name</label>
					<input
						type="text"
						{...register("author", { required: "Author is required" })}
						className="w-full border px-3 py-2 rounded"
					/>
					{errors.author && (
						<p className="text-red-500 text-sm">{errors.author.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold mb-1">Category</label>
					<select
						{...register("category", { required: "Category is required" })}
						className="w-full border px-3 py-2 rounded"
					>
						<option value="">Select a Category</option>
						<option value="Novel">Novel</option>
						<option value="History">History</option>
						<option value="Sci-Fi">Sci-Fi</option>
						<option value="Thriller">Thriller</option>
					</select>
					{errors.category && (
						<p className="text-red-500 text-sm">{errors.category.message}</p>
					)}
				</div>

				<div>
					<label className="block font-semibold mb-1">Rating (1-5)</label>
					<input
						type="number"
						min="1"
						max="5"
						{...register("rating", {
							required: "Rating is required",
							min: 1,
							max: 5,
						})}
						className="w-full border px-3 py-2 rounded"
					/>
					{errors.rating && (
						<p className="text-red-500 text-sm">{errors.rating.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
				>
					Update Book
				</button>
			</form>
		</div>
	);
};

export default UpdateBook;
