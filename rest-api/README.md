# Rest API

## Starting in Development

```
npm install
npm run dev
```

A mongodb instance must be running on port 27017. Use docker-compose.yml that lives on the root.

## Endpoints

### GET /:topic?user=xxx

Fetches the likes for the given topic, and a flag that tells if the user has liked the topic.

```
GET localhost:3001/ufc-257?user=johnnylawrence

{
    likes: 10,
    liked: true
}
```

### POST /:topic?user=xxx

This is the equivalent of a Like action. The user will be added to a users list, on the topics collection.
It is a void operation, as the UI can handle the state.

```
POST localhost:3001/ufc-257?user=johnnylawrence
//void
```

### DELETE /:topic?user=xxx

This is the equivalent of a dislike action. The user will be removed from the users list on the topics collection.
It is a void too, like the POST above.

```
DELETE localhost:3001/ufc-257?user=johnnylawrence
//void
```

## Persistance Layer

The persistance layer is simple.
It has one collection, called `userlikes`. This collection has two fields:

- topic: string
- users: string[]

A like action will work by querying the database for the topic and adding the user to the users array.
A dislike action will work by querying the database for the topic and removing the user from the array.

### The GET user likes query

The [buildQuery](src/userLikes/repository/getUserLikes/functions.ts) method builds the query, using an aggregate to fetch the like count and the liked flag, based on a user and a topic.
