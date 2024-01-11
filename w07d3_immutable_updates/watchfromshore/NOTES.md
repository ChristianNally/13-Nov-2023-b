#
# React in General
#

- different styles of function definition
- where should state be defined?
- what about all these props?
- setting state: two options
- 0) state = 41;
- a) setState(42);
- b1) const handler = prev => {
    // more and more lines
    return (prev + 1)
    };
- b) setState(handler) # for multiple setState calls per render

#
# An App to Watch Whales From Shore
#

- Sighting
{
    image: 'stringpath.png',
    user: user_id,
    bodyText: 'it was amazing. there are 6 of them!',
    likeCount: 0
    replies: [
        {
          user: user_id2,
          bodyText: 'yes, I see 6',
          likeCount: 0
        },
        {
          user: user_id3,
          bodyText: 'i only, I see 5',
          likeCount: 3
        }
    ]
}
