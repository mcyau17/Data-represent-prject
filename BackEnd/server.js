const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@clusterproj.lgf71e8.mongodb.net/?retryWrites=true&w=majority');

  //mongodb+srv://admin:<password>@clusterproj.lgf71e8.mongodb.net/?retryWrites=true&w=majority
  // mongodb+srv://mcyau17:yausaiwah995@cluster0.coaymg2.mongodb.net/?retryWrites=true&w=majority
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const CharacterInfoSchema = new mongoose.Schema({
  name:String,
  image:String,
  race:String,
  mainclass:String,
  subclass:String
})

const CharacterInfoModel = mongoose.model('dfgdfgdfgdfg5r5645634fggh', CharacterInfoSchema);

app.delete('/api/CharacterInfo/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let CharacterInfo = await CharacterInfoModel.findByIdAndDelete(req.params.id);
  res.send(CharacterInfo);
})


app.put('/api/CharacterInfo/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let CharacterInfo = await CharacterInfoModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(CharacterInfo);
})


app.post('/api/CharacterInfo', (req,res)=>{
    console.log(req.body);

    CharacterInfoModel.create({
      name:req.body.name,
      image:req.body.image,
      race:req.body.race,
      mainclass:req.body.mainclass,
      subclass:req.body.subclass
    })
    .then(()=>{ res.send("Character Created")})
    .catch(()=>{ res.send("Character NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/CharacterInfo', async(req, res)=>{
    
  let CharacterInfos = await CharacterInfoModel.find({});
  res.json(CharacterInfos);
})

app.get('/api/CharacterInfo/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let CharacterInfo = await CharacterInfoModel.findById(req.params.identifier);
  res.send(CharacterInfo);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})