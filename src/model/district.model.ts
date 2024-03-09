const mongoose = require("mongoose");
const { Schema } = mongoose;

const districtSchema = new Schema({
  id: String,
  division_id: String,
  name: String,
  bn_name: String,
  lat: String,
  lon: String,
  url: String,
});

const District = mongoose.model("District", districtSchema);

export default District;
