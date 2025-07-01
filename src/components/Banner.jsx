import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bookData = [
	{
		id: 1,
		title: "The Hitchhiker's Guide to the Galaxy",
		description:
			"Arthur Dent's misadventures after Earth is destroyed to make way for a hyperspace bypass.",
		author: "Douglas Adams",
		image: "https://i.postimg.cc/C1H63Tfd/image.png",
		category: "Science Fiction",
		isbn: "978-0345391803",
	},
	{
		id: 2,
		title: "Pride and Prejudice",
		description:
			"A classic novel exploring themes of love, class, and societal expectations in 19th-century England.",
		author: "Jane Austen",
		image: "https://i.postimg.cc/MTDds7hQ/image.png",
		category: "Classic Literature",
		isbn: "978-0141439518",
	},
	{
		id: 3,
		title: "Sapiens: A Brief History of Humankind",
		description:
			"Yuval Noah Harari's groundbreaking look at the history of humanity from the Stone Age to the 21st century.",
		author: "Yuval Noah Harari",
		image: "https://i.postimg.cc/SKj90W29/image.png",
		category: "Non-Fiction",
		isbn: "978-0062316097",
	},
];

const Banner = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="relative mt-20 p-10 w-full overflow-hidden rounded-lg bg-gray-200">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				loop={true}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
			>
				{bookData.map((book, index) => (
					<SwiperSlide key={book.id}>
						<div className="flex flex-col md:flex-row bg-white rounded-xl p-6">
							{/* Motion Image */}
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 1 }}
								className="relative h-60 w-full md:h-80 md:w-1/2 "
							>
								<img
									src={book.image}
									alt={book.title}
									className="h-full w-full object-contain rounded-xl"
								/>
								<div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-amber-600">
									{book.category}
								</div>
							</motion.div>

							{/* Motion Text */}
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								animate={activeIndex === index ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 1, delay: 0.2 }}
								className="flex w-full flex-col justify-center p-6 md:w-1/2 "
							>
								<h2 className="mb-2 text-2xl font-bold text-gray-900">
									{book.title}
								</h2>
								<p className="mb-4 text-gray-600">{book.description}</p>

								<div className="mb-4 flex space-x-4">
									<span className="text-lg text-gray-600">
										<span className="font-bold">Author:</span> {book.author}
									</span>
								</div>

								{book.isbn && (
									<div className="flex items-center">
										<span className="text-lg text-gray-600">
											<span className="font-bold">ISBN:</span> {book.isbn}
										</span>
									</div>
								)}
							</motion.div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation Arrows */}
			<button className="swiper-button-prev absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full">
				<FiChevronLeft className="text-amber-600" />
			</button>
			<button className="swiper-button-next absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full">
				<FiChevronRight className="text-amber-600" />
			</button>
		</div>
	);
};

export default Banner;
