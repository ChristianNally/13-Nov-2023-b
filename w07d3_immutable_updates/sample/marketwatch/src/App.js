import './App.css';
import CompanyGrid from './components/CompanyGrid';
import { useState, useEffect } from 'react';

function App() {

	const initList = [
		{
			name: 'LHL',
			url: 'https://www.lighthouselabs.ca/en/careers',
			newContent: true
		},
		{
			name: 'MSFT',
			url: 'https://example.com/msft/careers',
			newContent: false
		},
		{
			name: 'Google',
			url: 'https://example.com/google/careers',
			newContent: true
		},
		{
			name: 'X',
			url: 'https://example.com/x/careers',
			newContent: false
		},
	];

	const [listOfCompanies, setListOfCompanies] = useState(initList); 

	const turnOffNewStatus = (index) => {
		setListOfCompanies((prev) => { 
			const newVersionOfState = [...prev];
			newVersionOfState[index].newContent = false;
			return newVersionOfState;
		});
	};

	const turnOnNewStatus = (index) => {
		setListOfCompanies((prev) => { 
			const newVersionOfState = [...prev];
			newVersionOfState[index].newContent = true;
			return newVersionOfState;
		});
	};

	//
	useEffect(() => {
		setTimeout(() => {
			turnOnNewStatus(1);
		}, 5000);
	}, []); // this means that the useEffect callback will be called only once
	// just after the initial render of this component

  return (
    <div className="App">
			<h2>MarketWatch</h2>
			<CompanyGrid companylist={listOfCompanies} turnOffNewStatus={turnOffNewStatus}/>
    </div>
  );
}

export default App;
