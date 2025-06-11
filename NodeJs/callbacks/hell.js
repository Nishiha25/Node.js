function login(user, callback) {
  setTimeout(() => {
    console.log("User logged in");
    callback(null, { id: 1, name: "Nishiha" });
  }, 1000);
}

function getProfile(userData, callback) {
  setTimeout(() => {
    console.log("Profile fetched");
    callback(null, { id: userData.id, bio: "Developer" });
  }, 1000);
}

function getPosts(profileId, callback) {
  setTimeout(() => {
    console.log("Posts retrieved");
    callback(null, ["Post1", "Post2", "Post3"]);
  }, 1000);
}

login("user", (err, userData) => {
  if (!err) {
    getProfile(userData, (err, profile) => {
      if (!err) {
        getPosts(profile.id, (err, posts) => {
          if (!err) {
            console.log("Posts:", posts);
          }
        });
      }
    });
  }
});
