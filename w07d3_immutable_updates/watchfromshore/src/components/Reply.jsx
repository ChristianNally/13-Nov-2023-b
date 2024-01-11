export default function Reply(props) {
    console.log('props.reply', props.reply);
    return (
<div className="reply">
<div className="user">User Id:{props.reply.user}</div>
<div className="reply">Reply Id:{props.reply.id}</div>
<div className="count">Like Count:{props.reply.likeCount}</div>
<p>{props.reply.bodyText}</p>
<div className="counter">
    <button onClick={() => {
        props.decrementReplyCount(props.reply.id);
    }}>-</button>
    {props.reply.likeCount}
    <button onClick={() => {
        props.incrementReplyCount(props.reply.id);
    }}>+</button>
    </div>
</div>
    );
}



