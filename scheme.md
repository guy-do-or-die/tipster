We need to implement many-to-many relationship between users and events 
see http://www.slideshare.net/rogerbodamer/schema-design-with-mongodb 
slide #35 and further for m2m example.

About  EAV approach vs. mongoDB see db schemes comparison for this use case 
http://docs.mongodb.org/manual/use-cases/product-catalog/

Instead of modifying User model in MEAN boilerplate I would add UserProfile 
model (one-to-one with User model). Thus we can leave all auth routine to 
User model -- it is implemented already.

Also we need to implement m2m relationship beteween users in order to describe
followers.

In this scheme information about user events is stored in user doc and vice versa
user list is stored in each event. There are alternatives (see slides above).

UserProfile
-----------
``` javascript
{
    _id: 123,
    user: ObjectId("111"), // link to User instance
    details: {
        isCurator: yes/no,
        profilePic: "", // image link
        character: "artsy", // none or from list ["slacker", "posh totty", ...]
        geoLocation: "Moscow",
        social: {
            vk_link: "", // vk.com id
            fb_link: "", // facebook id
            lfm_link: "", // LastFM id
            ... 
            },
        blog: { // curators only. maybe it'll be better use link instead of embedding
            title: "",
            posts: []
        },
        ...
        ... // more specific stuff
        ...
    },
    events = [ // links to Event instances
        ],
    following_ids = [ // links to UserProfile instances
        ]
}
```

Event
-----
``` javascript
{
    _id: 345,
    details: {
        title: "The Event",
        pic: "", // image link
        source_link: "http://...",
        geo_location: "Moscow", // address or even {address: String or Doc, coords: [long, latt]}
        when : ISODate("2013-07-26T09:10:34.633Z"),
        description: "The best event of all time.",
        categories: [],
        tags: [],
        price: {
            // any complex description
        },
        age_restrictions: "",
        ...
    },
    profiles: [ // users related to the event
        ]
}
```

User/Event list in details
--------------------------
Think about RSVP. There are few ways for a user to be related to an event.
User may like it, may attend it or may be interested in it, etc.

We can store it this way:
``` javascript
{
    ...
    event_ids:[
        {type: "attend", ObjectId("edcerfv")},
        {type: "like", ObjectId("edcerfv")},
        {type: "interested", ObjectId("edcerfv")},
    ]
}
```
