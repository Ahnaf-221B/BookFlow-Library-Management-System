import { FaEnvelopeOpenText } from "react-icons/fa";

export default function NewsLetter() {
	return (
		<section className="bg-gray-300 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<FaEnvelopeOpenText className="mx-auto text-blue-600 text-4xl mb-4" />
				<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
					Subscribe to our Newsletter
				</h2>
				<p className="text-gray-600 mb-8">
					Get updates on new arrivals, exclusive recommendations, and upcoming
					events in our library.
				</p>

				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<input
						type="email"
						required
						placeholder="Enter your email"
						className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
					/>
					<button
						type="submit"
						className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
					>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
}
