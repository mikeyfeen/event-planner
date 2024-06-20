const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const {Event} = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())

//-------------Users----------------
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

//-------------Events----------------

//Create an event
app.post('/events', async (req, res) => {{
    if(!req.body.name || !req.body.description || !req.body.date || !req.body.location){
        return res.status(400).json({message: "All fields are required"});
    } else {
        const newEvent = new Event({... req.body});
        const insertEvent = await newEvent.save();
        return res.status(201).json(insertEvent);
    }
}
});

//Get all events
app.get('/events', async (req, res) => {{
    const allEvents = await Event.find();
    return res.status(200).json(allEvents);
}});

//Get a specific event
app.get('/events/:id', async (req, res) => {{
    //check if id is valid, if not return 400
    try {
        const event = await Event.findById(req.params.id);
        return res.status(200).json(event);
    }
    catch (error) {
        return res.status(400).json({message: "Invalid ID"});
    }
}});

//Update an event
app.put('/events/:id', async (req, res) => {{
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).send();
    }
    catch (error) {
        return res.status(400).json({message: "Invalid ID"});
    }
}});

//Delete an event
app.delete('/events/:id', async (req, res) => {{
    try {
        await Event.findByIdAndDelete(req.params.id);
        return res.status(204).send("Event Deleted Successfully");
    }
    catch (error) {
        return res.status(400).json({message: "Invalid ID"});
    }
}});

//-----------------Chat-----------------

//Create a chat


//-----------------Server-----------------
try {
    //Connect to the database
    mongoose.connect(process.env.MONGO_URI);

}catch (error) {
    console.log("Error occurred while connecting to the database", error);
    process.exit(1);
}


app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    } else {
        console.log("Error occurred, server can't start", error);
    }
});


