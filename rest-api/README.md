# Like Button REST API

The REST API has three endpoints:
/likes
/like
/dislike

the /like endpoint, when called, reads the like buffer from redis and updates it by 1.

the /dislike endpoint, when called, reads the like buffer from redis, and updates it by -1.

the /likes endpoint, when called, return the like count from redis.
