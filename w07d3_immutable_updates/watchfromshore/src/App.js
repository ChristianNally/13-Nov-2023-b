import logo from './logo.svg';
import { useReducer } from 'react';
import Header from './components/Header.jsx';
import ReplyList from './components/ReplyList.jsx';
import Footer from './components/Footer.jsx';
import Sighting from './components/Sighting.jsx';
import './App.css';

//
// this is where we import the reducer function (the reducer function consolidates all the state changes)
//
import reducer, { INCREMENT_REPLY_LIKE_COUNT, DECREMENT_REPLY_LIKE_COUNT } from './reducers/sightingStateReducer.js';

const users = [
  {
    username: 'LikeSo',
    uid: 0,
    profilePic: 'user0.png'
  },
  {
    username: 'LikeSome',
    uid: 1,
    profilePic: 'user1.png'
  },
  {
    username: 'LikeMore',
    uid: 2,
    profilePic: 'user2.png'
  },
];

const stateDefault = {
  image: 'stringpath.png',
  user_id: 0,
  bodyText: 'it was amazing. there are 6 of them!',
  likeCount: 0,
  replies: [
      {
        id: 0,
        user: 1,
        bodyText: 'yes, I see 6',
        likeCount: 0
      },
      {
        id: 1,
        user: 1,
        bodyText: 'i only, I see 5',
        likeCount: 3
      }
  ]
};

function App() {

	//  const [sighting, setSighting] = useState(stateDefault); // this is the state
	const [sighting, dispatch] = useReducer(reducer, stateDefault);

	//
	// this is where we dispatch the action to the reducer function
	//
	// we will NOT pass dispatch down to the components. that means we don't have to think 
	// about the reducer function in the components. instead we will pass down the following helper functions
	//
	const incrementReplyCount = (reply_index) => {
		dispatch({type: INCREMENT_REPLY_LIKE_COUNT, payload: reply_index});
	};

	const decrementReplyCount = (reply_index) => {
		dispatch({type: DECREMENT_REPLY_LIKE_COUNT, payload: reply_index});
	};

  return (
    <>
      <Header />
      <main>
        <Sighting users={users} sighting={sighting}/>
      </main>
      <ReplyList replies={sighting.replies} decrementReplyCount={decrementReplyCount} incrementReplyCount={incrementReplyCount}/>
      <Footer />
    </>
  );
}

export default App;
