import jwt from 'jsonwebtoken';
import { JWT_SECRET , JWT_EXPIRATION } from "../config.js";
 export function signToken ({ firstName, email, _id }) {
  const payload = { firstName, email, _id };
  return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}


export default {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, JWT_SECRET, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };
    return jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  },
};
