import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id: {},
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    telephone: [
        {
            ddd: {
                type: String,
                required: true
            },
            number: {
                type: String,
                required: true
            },
        }
    ],
    password: {
        type: String,
        minlength: 6,
        maxlength: 60,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    updateAt: {
        type: Date,
        default: new Date
    },
    lastLogin: {
        type: String,
        default: new Date
    },
    token: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Users', userSchema);

export default User