import Company from './Company';

const CompanyGrid = (props) => {

	const buildList = () => {
		return props.companylist.map((company, index) => {
			console.log('company-within-map', company);
			return <Company 
				key={index}
				index={index} 
				company={company} 
				turnOffNewStatus={props.turnOffNewStatus}
				/>;
		});
	};

	// 

	return (
		<>
			<h1>CompanyGrid</h1>
			<ul>
				{ buildList() }
			</ul>
		</>
	);
};

export default CompanyGrid;
