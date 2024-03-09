import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import cors from "cors";

app.use(cors());
app.use(morgan("dev"));

import locationRouter from "./router/location";

// internal Import
import {
  notFoundHandler,
  errorHandler,
} from "./middleWares/common/errorHandler";

// database connection
mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() => {
    console.log("DB connection successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/location", locationRouter);

//

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
