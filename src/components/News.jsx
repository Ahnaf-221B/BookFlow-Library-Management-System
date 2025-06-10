// UpcomingEvents.js (or wherever this component is defined)

import React from "react"; // Don't forget to import React

// Static event data defined directly within this component's scope
const eventData = [
	{
		id: 1,
		title: "Children's Story Time: Adventures in Reading",
		date: "July 20, 2025 - 10:00 AM",
		location: "Main Reading Room",
		description:
			"Join us for a magical story time session with special guest readers and interactive games for kids aged 3-7.",
		category: "Children's Program",
	},
	{
		id: 2,
		title: "Local Authors Showcase & Book Signing",
		date: "August 5, 2025 - 06:00 PM",
		location: "Community Hall",
		description:
			"Meet local authors, discover new voices, and get your books signed. Refreshments will be served.",
		category: "Adult Program",
	},
	{
		id: 3,
		title: "Coding for Beginners Workshop",
		date: "August 18, 2025 - 02:00 PM",
		location: "Computer Lab",
		description:
			"An introductory workshop on coding fundamentals using Python. No prior experience needed. Registration required.",
		category: "Workshop",
	},
	{
		id: 4,
		title: "Monthly Book Club Meeting: 'The Great Gatsby'",
		date: "September 10, 2025 - 07:00 PM",
		location: "Online (Zoom)",
		description:
			"Discuss F. Scott Fitzgerald's classic novel. New members are always welcome!",
		category: "Book Club",
	},
];

const News = () => {
	return (
		<section className="mt-16 p-10 bg-gray-100 rounded-lg shadow-md">
			<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
				Upcoming Events & Library News
			</h2>
			<div className="space-y-6 grid grid-cols-1 md:grid md:grid-cols-4 gap-6">
				{eventData.map((event) => (
					<div key={event.id} className=" bg-white p-6 rounded-lg shadow-sm h-full">
						<div className="flex items-center mb-2">
							<span className="text-xs px-3 py-1 rounded-full bg-amber-200 text-amber-800 font-medium mr-3">
								{event.category}
							</span>
							<h3 className="text-xl font-semibold text-gray-800">
								{event.title}
							</h3>
						</div>
						<p className="text-sm text-gray-700 mb-2">
							<span className="font-medium">Date:</span> {event.date}
						</p>
						<p className="text-sm text-gray-700 mb-3">
							<span className="font-medium">Location:</span> {event.location}
						</p>
						<p className="text-gray-600 text-sm">{event.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default News; // Export the component
