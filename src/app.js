import express from "express";

const app = express();

app.get("/test", (req, res) => {
  console.log("inside test api");
  console.log("============sdss==========");
  const test = "Hi";
  let s = true;
  const {token} = req.headers.authorization.meta;
  if (true) {
    console.log('true');
    console.log('true');
    console.log('true');
    console.log('true');
  } 
  if (true) {
              console.log('true');
    console.log('true');

               console.log('true');
    console.log('true');
  } 

  if (true) {
    console.log('true');
              console.log('true');
                     console.log('true');
    console.log('true');
  } 
  if (true) {
    console.log('true');
    console.log('true');
    console.log('true');
    console.log('true');
  } 
  if (true) {
    console.log('true')
  } else {
    console.log('false')
  }
  const testArray = ['a','b','c','d'];

  testArray.forEach(element =>{
    console.log(element)
  })

  for(let i =0; testArray.length > 0 ; i++){
    console.log('output ',testArray[i])
  }
  res.status(200).send({ message: "test" });
});

app.get("/testduplications", (req, res) => {
  console.log("inside test api");
  console.log("======================");
  const test = "Hi";
  let s = true;
  if (true) {
    console.log('true');
    console.log('true');
    console.log('true');
    console.log('true');
  }

  if (true) {
    console.log('true')
  } else {
    console.log('false')
  }
  res.status(200).send({ message: "test" });
});

export default app;
