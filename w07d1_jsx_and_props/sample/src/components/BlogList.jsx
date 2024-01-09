import Blog from './Blog';

const BlogList = (blogListProps) => {

	// console.log('props.list', props.list);

	return (
		<div className="list-of-blogs">
			<h1>BlogList</h1>
			{ blogListProps.list.map((item, index) => {
				return <Blog 
					key={index} 
					title={item.title} 
					text={item.text} 
					/>;
			}) }
		</div>
	);
};

export default BlogList;
