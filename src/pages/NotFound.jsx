import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import notFoundLight from '../../src/images/personal-infothumb-2653662e.png'; 
export default function NotFound() {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.8 }}
			className="flex flex-col items-center justify-center min-h-screen text-center"
		>
			<img
				src={notFoundLight}
				alt="404 Not Found"
				className="w-80 sm:w-96 mb-6"
			/>
			<h1 className="text-4xl font-bold text-ternary-dark dark:text-primary-light mb-4">
				Page Not Found
			</h1>
			<p className="text-lg font-medium text-ternary-dark dark:text-primary-light mb-4">
				Sorry, the page you’re looking for doesn’t exist.
			</p>
			<Link
				to="/"
				className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
			>
				Back to Home
			</Link>
		</motion.section>
	);
};