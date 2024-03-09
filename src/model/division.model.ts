const mongoose = require("mongoose");
const { Schema } = mongoose;

const divisionSchema = new Schema({
  id: String,
  name: String,
  initial: String,
  bn_name: String,
  url: String,
});

const Division = mongoose.model("Division", divisionSchema);

export default Division;
