

import React from "react"; 

const bookData = [
	{
		id: 1, // Make sure this ID is unique in your actual data
		title:
			"Atomic Habits",
		description:
			"An acclaimed guide by James Clear that offers practical strategies for building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.",
		author: "James Clear",
		image: "https://i.postimg.cc/dQTNGC04/image.png",
		category: "Self-Help",
		isbn: "978-0735211292",
	},
	{
		id: 2,
		title: "To Kill a Mockingbird",
		description:
			"A novel by Harper Lee published in 1960. It was instantly successful, winning the Pulitzer Prize.",
		author: "Harper Lee",
		image: "https://i.postimg.cc/L4fvJMyW/image.png",
		category: "Classic Literature",
		isbn: "978-0446310789",
	},
	{
		id: 3,
		title: "1984",
		description:
			"A dystopian social science fiction novel and cautionary tale by English author George Orwell.",
		author: "George Orwell",
		image: "https://i.postimg.cc/Dfqd2P0k/image.png",
		category: "Dystopian Fiction",
		isbn: "978-0451524935",
	},
];

const FeaturedBook = () => {
	
	

	return (
		<section className="mt-16 p-12 bg-white rounded-lg shadow-md">
			<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
				Featured Books
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{bookData.map((book) => (
					<div
						key={book.id}
						className="bg-gray-200 p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
					>
						<div className="h-48 w-32 md:h-60 md:w-40 overflow-hidden rounded-md mb-4">
							<img
								src={book.image || "/placeholder-book.svg"}
								alt={book.title}
								className="h-full w-full object-contain"
							/>
						</div>
						<h3 className="text-2xl font-semibold text-gray-800 mb-2">
							{book.title}
						</h3>
						<p className="text-sm text-gray-600 mb-3 line-clamp-2">
							{book.description}
						</p>
						<p className="text-xs font-medium text-amber-600">
							{book.category}
						</p>
						<p className="text-xs text-gray-500 mt-1">By {book.author}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedBook; 
