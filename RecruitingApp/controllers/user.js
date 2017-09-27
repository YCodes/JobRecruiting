var User = require('../models/user');


exports.postClients = function(req, res) {
  var user = new User();

  // Set the client properties that came from the POST data
  user.id = req.body.id;
  user.name = req.body.name;
  user.password = req.body.password;

  // Save the client and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Client added to the locker!', data: client });
  });
};

// Create endpoint /api/clients for GET
exports.getClients = function(req, res) {
  // Use the Client model to find all clients
  Client.find({ userId: req.user._id }, function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};