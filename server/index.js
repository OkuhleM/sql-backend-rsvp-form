const express = require("express");
const { formDataBase } = require("./database/database");
const app = express();
const port = 4009;
const cors = require('cors')

const { insertData } = require("./database/insertData");
const { modifyData } = require("./database/modifyData");
const { retrieveData } = require("./database/retrieveData");
const {removeData}=require('./database/removeData')

app.use(express.json());
app.use(cors())

app.post("/insert-data", async (req, res) => {
  const action = await insertData(req.body);
  try {
    res.send({ message: `action` },action).status(200);
  } catch (err) {
    console.log(error);
    res.send(501);
  }
});

app.get("/retrieve-data/", async (req, res) => {
  try {
    console.log(req.body);
    const attenders = await retrieveData(req.body);
    console.log("attender", attenders);
    res.send(attenders).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

app.put("/modify-data/:id", async (req, res) => {
  const {id} = req.params
  
  try {
    const findAttendee = await modifyData(req.body,id);
    console.log("findAttendee", findAttendee);
    res.send(findAttendee);
  } catch (error) {
    console.log(error);
    res.send(404);
  }
});

app.delete("/removeData/:user_id", async (req,res) =>{
  const {user_id}=req.params
  try{
    const removeAttendee = await removeData(req.body,req.params);
    console.log("removeAttendee",req.body,removeAttendee)
    res.send(removeAttendee);
  }catch(error){
    console.log(error)
    res.send(404)
  }
})

formDataBase.connect();
app.listen(port, () => {
  console.log(`listening on port${port}`);
});
