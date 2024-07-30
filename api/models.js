const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// -----------------Models-----------------

// Event model

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    members: [String],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    }
});


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    console.log("Comparing password: ", candidatePassword, " with hashed password ", this.password);
    return bcrypt.compare(candidatePassword, this.password);
}

const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Event, User};