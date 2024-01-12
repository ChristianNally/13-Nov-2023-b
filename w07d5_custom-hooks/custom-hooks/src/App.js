import React from 'react';
import './App.css';

import {useState, useEffect} from 'react';

// import UseMousePosition from './components/UseMousePosition';
// import DocumentTitle from './components/DocumentTitle';
// import LocationData from './components/LocationData';
import KeyPress from './components/KeyPress';
// import LoginForm from './components/LoginForm';
// import UseRequest from './components/UseRequest';
import LocalStorage from './components/LocalStorage';
// import useDT from './hooks/useDT.js';

function App() {

	// useDT('monkey 2 monkey');

	const [text, setText] = useState('');
	const textHelper = (event) => {
		setText(event.target.value);
	};

  return (
    <div className="App">
			<h1>Monkey Fuzz App</h1>
			<input type="text" value={text} onChange={textHelper} />
			<br/>
			{text}
      {/* <DocumentTitle /> */}
      {/* <UseMousePosition /> */}
      {/* <LocationData /> */}
      <KeyPress />
      {/* <LoginForm /> */}
      {/* <UseRequest /> */}
      <LocalStorage />
    </div>
  );
}

export default App;
