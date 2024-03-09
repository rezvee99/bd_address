import mongoose, { Schema } from "mongoose";

const upazilaSchema = new Schema({
  id: String,
  district_id: String,
  name: String,
  bn_name: String,
  url: String,
});

const Upazila = mongoose.model("Upazilla", upazilaSchema);

export default Upazila;
