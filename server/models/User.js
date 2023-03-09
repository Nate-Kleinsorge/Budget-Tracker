import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
//import isEmail from 'validator';

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
       // validate: isEmail, 
    },
    password: {
        type: String,
        required: true,
        minlength: [6 , 'Minimum password length is 6 characters.'],
    },
    firstName: {
        type: String,
        required: true,
    },lastName: {
        type: String,
        required: true,
    },

});

userSchema.pre("save", async function (next) {
    const isNewPassword = this.isNew || this.isModified("password");
    if (isNewPassword) {
        this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;