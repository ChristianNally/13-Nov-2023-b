export const INCREMENT_REPLY_LIKE_COUNT = 'incrementReplyLikeCount';
export const DECREMENT_REPLY_LIKE_COUNT = 'decrementReplyLikeCount';

const reducer = (state, action) => { // takes in state and an action. the return value is the new state.

	const newReplies = [...state.replies]; // build up a deep copy
	const updatedSighting = {...state, replies: newReplies};

	switch (action.type) {
		case INCREMENT_REPLY_LIKE_COUNT:
      updatedSighting.replies[action.payload].likeCount++; // actually update it
      return updatedSighting;
		case DECREMENT_REPLY_LIKE_COUNT:
			updatedSighting.replies[action.payload].likeCount--; // actually update it
			return updatedSighting;	
		default:
			// here we return the state unchanged
			console.log('default reducer case: ', action.type, ' not found.');
			return state;
	}

};

export default reducer;