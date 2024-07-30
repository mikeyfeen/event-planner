const {Event} = require('../models');

const createEvent = async (req, res, next) => {
    const {name, description, date, location} = req.body;
    const owner = req.user._id;
    const members = [owner];

    try {
        const newEvent = new Event({name, description, date, location,members,owner});
        const insertEvent = await newEvent.save();
        return res.status(201).json(insertEvent);
    }
    catch (error) {
        next(error);
    }
}

const getEvents = async (req, res, next) => {
    const userID = req.user._id;
    
    try {
        const allEvents = await Event.find();
        return res.status(200).json(allEvents);
    }
    catch (error) {
        next(error);
    }
}


module.exports = {createEvent};
