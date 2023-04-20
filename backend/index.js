import express from "express";
import db from "./src/config/db.js";
import cors from 'cors';
import indexRouter from "./src/routes/index.js";
import { AppError } from "./src/error/AppError.js";

const app = express();

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3000);

//connect to
db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });

// routes
app.use("/api/v1", indexRouter);
app.use((err, _req, res, _next) => {
  if (err instanceof AppError) {
    const { message, httpStatusCode } = err;
    console.log(message);
    return res.status(httpStatusCode).json({ message });
  }
  return res.status(500).json({ msg: `Internal server error - ${err.message}` });
});
app.use("*", (req, res) => {
  res.status(404).json({ data: "404 - not found", redirect: "Go back to /list/all"});
});

// start server
app.listen(app.get("port"), () => {
  console.log("Server is  running on port => ", app.get("port"));
});
