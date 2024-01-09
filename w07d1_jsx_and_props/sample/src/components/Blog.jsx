const Blog = (props) => {

	console.log('props', props);
	console.log('props.title', props.title);

	// const {title, text} = props;

	// business logic goes here

	return (
		<article>
			<h1>{ props.title }</h1>
			<p>
				{ props.text }
			</p>
		</article>
	);
};

export default Blog;
