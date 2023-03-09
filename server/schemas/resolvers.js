import User from '../models/User.js';
import {GraphQLError}  from "graphql";
import { signToken} from '../utlis/auth.js';

const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";



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
    addUser: async (parent, args) => {
      console.log("ARE YOU THERE")
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new GraphQLError("No user!" , {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        });
      }
      const isPasswordCorrect = await user.isCorrectPassword(password);
      if (!isPasswordCorrect) {
        throw new GraphQLError("Incorrect password!" , {
          extensions: {
            code: AUTHENTICATION_ERROR,
          },
        })
      }
      const token = signToken({ email: user.email});
        return {token};
    },
  }
}

export default resolvers;