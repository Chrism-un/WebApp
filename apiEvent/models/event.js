const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const EventSchema = new mongoose.Schema({

      
});


module.exports = mongoose.model('event', EventSchema, 'Event');