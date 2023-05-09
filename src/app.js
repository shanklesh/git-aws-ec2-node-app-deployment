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
    console.log('true  ',' false');
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
        console.log("=====");
  const test = "Hi";
  let s = true;
  if (true) {
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

function  doIf(a) {
  if(true){
     const build = true;
  }
  console.log(build)

 
    if (a === 1) {
        return x; // 1st path
    } else if (a === 2) {
        return x+1; // 2nd path
    } else if(a === 3) {
        return 3; // 3rd path
    } else if(a === 4){
      return 4
    }else if(a === 5){
      return 6
    }else if(a === 7){
      return 8
    }else if(a === 9){
      return 9
    }else if(a === 10){
      return 10
    }else if(a === 11){
      return 11
    }else if(a === 12){
      return 12
    }else if(a === 13){
      return 13
    }else if(a === 14){
      return 14
    }else if(a === 15){
      return 15
    }else if(a === 16){
      return 16
    }else if(a === 17){
      return 17
    }else if(a === 18){
      return 18
    }else if(a === 19){
      return 19
    }else if(a === 20){
      return 20
    }else if(a === 21){
      return 21
    }else if(a === 22){
      return 22
    }else if(a === 23){
      return 23
    }
    else if(a === 24){
      return 24
    }else if(a === 24){
      return 24
    }
}
export default app;
