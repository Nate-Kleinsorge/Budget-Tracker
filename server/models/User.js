import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    userData: [],
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