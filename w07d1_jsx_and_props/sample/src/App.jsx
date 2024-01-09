import './App.css';
import BlogList from './components/BlogList';

function App() {

	// const x = <h1>This is a Value</h1>;
	// console.log('monkey fuzz', x);

	// the blogList data structure
	const blogList = [
		{
			title: 'One',
			text: 'This is the text for the first blog post'
		},
		{
			title: 'Two',
			text: 'Here is some more body text'
		},
		{
			title: 'Buckle',
			text: 'We the People'
		},
		{
			title: 'My',
			text: 'Want Our Constitution Back'
		},
		{
			title: 'Shoe',
			text: 'Is that really too much to ask?'
		},
	];

  return (
    <div className="App">
			<BlogList list={ blogList }/>
    </div>
  );
}

export default App;
