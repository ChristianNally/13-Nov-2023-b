import {useState, useEffect} from 'react';

const useDT = (defaultTitle) => {
	const [title, setTitle] = useState(defaultTitle);

	useEffect(()=>{
		console.log('i am about to set the title');
		document.title = title;
	},[title]);
};

export default useDT;