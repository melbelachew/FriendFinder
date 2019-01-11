var friendsData= require("../data/friendsData");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
}

// for(var i=0; i<friends.length; i++) {
// friends.push(req.body);
// res.json(true)}