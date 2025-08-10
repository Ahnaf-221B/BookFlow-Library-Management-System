import React from "react";

const AboutUs = () => {
	return (
		<section className="bg-gray-300 text-black mt-20 py-12 px-6 sm:px-10 md:px-20 rounded-lg shadow-lg max-w-6xl mx-auto my-12">
			<h2 className="text-3xl sm:text-4xl font-extrabold mb-6 border-b-4 border-blue-600 inline-block pb-2">
				About Us
			</h2>
			<p className="text-base sm:text-lg leading-relaxed mb-6">
				At <span className="font-semibold">BookFlow</span>, we are
				passionate about transforming traditional library management into a
				seamless digital experience. Our platform empowers librarians and book
				lovers alike by simplifying book cataloging, borrowing, and returning —
				all with an intuitive, user-friendly interface.
			</p>
			<p className="text-base sm:text-lg leading-relaxed mb-6">
				Whether managing a community collection or a vast academic archive, we
				provide reliable tools that enhance efficiency and promote easy access
				to knowledge. Our mission is to support lifelong learning by bridging
				technology and literature
			</p>
			<p className="text-base sm:text-lg leading-relaxed">
				Join us on our journey to make library management smarter, faster, and
				more enjoyable for everyone.
			</p>
		</section>
	);
};

export default AboutUs;
