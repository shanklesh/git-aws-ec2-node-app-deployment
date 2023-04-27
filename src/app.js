import express from "express";

const app = express();

app.get("/test", (req, res) => {
  console.log("inside test api");
  console.log("========");
  const test = "Hi";
  let s = true;
  if (true) {
  } else {
  }
  res.status(200).send({ message: "test" });
});

export default app;
