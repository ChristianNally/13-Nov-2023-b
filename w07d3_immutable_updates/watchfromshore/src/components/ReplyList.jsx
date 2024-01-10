import Reply from './Reply';

export default function ReplyList(props) {
	console.log('replies', props.replies);
	return (
		<section className="replies">
			<h4>Replies</h4>
			{props.replies.map((item, index) => {
				return <Reply
					key={index}
					reply={item}
					decrementReplyCount={props.decrementReplyCount}
					incrementReplyCount={props.incrementReplyCount}
				/>
			})}
		</section>
	);
}
