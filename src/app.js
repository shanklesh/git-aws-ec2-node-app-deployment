import express from "express";

const app = express();

app.get("/test", (req, res) => {
  console.log("inside test api");

  res.status(200).send({ message: "test" });
});

export default app;
