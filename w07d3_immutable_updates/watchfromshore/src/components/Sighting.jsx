export default function Sighting(props) {

    // image: 'stringpath.png',
    // user_id: 0,
    // bodyText: 'it was amazing. there are 6 of them!',
    // likeCount: 0,
    // replies: [

    const sighting = props.sighting;
    const users = props.users;
    console.log('sighting', sighting);

    return (
        <section className="sighting">
            <h3>Sighting</h3>
            <article>
                <div className="user">{users[sighting.user_id].username}</div>
                <p>{ sighting.bodyText }</p>
                <div className="counter"><button>-</button>{sighting.likeCount}<button>+</button></div>
            </article>
        </section>
    );
}

