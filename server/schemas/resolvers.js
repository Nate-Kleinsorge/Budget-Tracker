import User from '../models/User.js';


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password}) => {
      return User.create({ email, password})
    },

    addUserData: async (parent, { userId, month, house, grocery, gas, stream, other}) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { userData: {month, house, grocery, gas, stream, other} } },
        { new: true,
          runValidators: true,
        }
      );
    },
  }
}

export default resolvers;