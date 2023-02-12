const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warrantySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  product: { type: String, required: true },
  serialNumber: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  warrantyPeriod: { type: Number, required: true },
});

const Warranty = mongoose.model('Warranty', warrantySchema);

module.exports = Warranty;
