import logo from './logo.svg';
import './App.css';
import DestinationList from './components/DestinationList';
import SearchBar from './components/SearchBar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const defaultValue = [
	{
	"name": "Atlanta",
	},
	{
	"name": "Boston",
	},
	{
	"name": "Brooklyn",
	},
];

function App() {
	console.log('App is rendering.');
	const refreshing = false;

	const [cityList, setCityList] = useState(defaultValue); // example city object: {name: 'Toronto'}

	useEffect(() => {

		axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
		.then((response) => {
			console.log('response.data.data', response.data.data);
			const newCityList = response.data.data.map(item => {return {name: item.city}});
			setCityList(newCityList);
		})
		.catch((error) => {
			console.log('error', error);
		});
	}, []); // dep. arr. = [] -> run once and only once immediately after first render

  return (
    <div className="App">
			<SearchBar count={cityList.length}/>
			<DestinationList cityList={cityList}/>
    </div>
  );
}

export default App;
