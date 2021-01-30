db.createUser({
  user: "liker",
  pwd: "swordfish",
  roles: [
    {
      role: "readWrite",
      db: "likes",
    },
  ],
});
