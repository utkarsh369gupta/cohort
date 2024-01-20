const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');
 
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

// ------------------------------------------------------------------------------


const mongoose = require('mongoose');
import mongoose  from 'mongoose';

mongoose.connect('mongodb+srv://utk369gupta:M3SXr4TfEJq5Iaud@cluster0.cjpwxei.mongodb.net/try');

const user = mongoose.model('users', { name: String, password: String });

const boss = new user({ name: 'utkarsh gupta', password: "hello123" });

boss.save();

// ------------------------------------------------------------------------------------------------------------

