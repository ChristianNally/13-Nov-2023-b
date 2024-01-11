const Company = (props) => {

	console.log('props within company', props);

	const handleClick = (index, company) => {
		console.log('CLICK:', `${company.url} ${index}`);
		props.turnOffNewStatus(index);
	};

	let newStuff = '';
	if (props.company.newContent) {
		newStuff += "🚩";
	}

	return (
				<li 
					id={props.index} 
					key={props.index} 
					onClick={ (event) => { handleClick(props.index, props.company) } }
				>
					{props.company.name} <span>{newStuff}</span>
				</li>
	);
};

export default Company;
