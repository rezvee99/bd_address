const mongoose = require("mongoose");
const { Schema } = mongoose;

const unionSchema = new Schema({
  id: String,
  upazilla_id: String,
  name: String,
  bn_name: String,
  url: String,
});

const Union = mongoose.model("Union", unionSchema);

export default Union;
