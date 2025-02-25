const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const app=express();
app.use(express.json());

mongoose
 .connect(process.env.MONGO_URI)
 .then(()=> console.log("MongoDB is Connected"))
 .catch((err)=>console.log("MongoDB Error:",err));

const restaurent=mongoose.model(
    "restaurents",
    new mongoose.Schema({
        name:{type: String, required: true},
        location:{type: String, required: true}
    })
);

const menu=mongoose.model(
    "MenuItems",
    new mongoose.Schema({
        dishName:{type: String, required:true},
        cost:{type: Number, required:true},
    })
);

app.get("/",(req,res) => res.send("restaurent api is running"));

app.get("/restaurents", async (req, res) => res.json(await Book.find()));

app.post("/restaurents", async (req, res) => res.json(await new Book(req.body).save()));


app.get("/MenuItems", async(req,res) => res.json(await member.find()));

app.post("/MenuItems", async(req,res) => res.json(await new member(req.body).save()));

app.listen(5000,()=> console.log("Server is running in port 5000"));