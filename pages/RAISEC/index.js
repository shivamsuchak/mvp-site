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
				{content.map((data) => (
					<Link
						href={"/blogs/" + data.title.trim()}
						key={data.title.trim()}
					>
						
							<h3 className="border-4 border-green-500 rounded-2xl px-6 py-3 m-3">
								{data.title}
							</h3>
						
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlogIndex;