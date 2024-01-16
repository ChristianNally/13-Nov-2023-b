import Destination from './Destination';

const DestinationList = (props) => {
	const cityList = props.cityList;
	console.log('DestinationList is rendering. cityList', cityList);


	const onClose = (event) => {
		console.log('event', event);

	};

	return (
		<>
		<h1>D.L.</h1>
		{ cityList.map((item, index) => <h3 onClick={onClose} key={index}>{item.name}</h3>) }
		</>
	);
};

export default DestinationList;

