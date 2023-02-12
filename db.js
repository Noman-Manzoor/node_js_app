const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/short-project');
module.exports = mongoose;
