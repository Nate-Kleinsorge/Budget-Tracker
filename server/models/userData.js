import mongoose from 'mongoose';

const userDataSchema = new mongoose.Schema({
    monthIncome: {
        type: Number,
        required: true,
    },
    houseCost: {
        type: Number,
    },
    groceryCost: {
        type: Number,
    },
    gasCost: {
        type: Number,
    },
    streamCost: {
        type: Number,
    },
    otherCost: {
        type: Number,
    }
});

const userData = mongoose.model('userData', userDataSchema);

export default userData;