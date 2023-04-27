import express from "express";

const app = express();

app.get("/test", (req, res) => {
  console.log("inside test api");
  console.log("===================");
  res.status(200).send({ message: "test" });
});

export default app;
