import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("http://hcdbapi.herokuapp.com/s2/all");
	const data = await res.json();

	return {
		props: {
			content: data,
		},
	};
};

const BlogIndex = ({ content }) => {
	return (
		<div>
			<div className="grid grid-cols-4 text-center m-6 items-center justify-center">
				<h1>Something went wrong Try Again!</h1>
			</div>
		</div>
	);
};

export default BlogIndex;