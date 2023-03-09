import http from 'http';
import  path from 'path';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import mongoose from "mongoose";
import { PORT , MONGODB_URI } from "./config.js";
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';


const app = express();
const httpServer = http.createServer(app);

const BUILD_PATH = path.resolve("../client/build");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await mongoose.connect(MONGODB_URI);
await server.start();

app.use(express.static(BUILD_PATH));
app.use('/graphql', express.json(), expressMiddleware(server));
app.get('/login',(req, res) => {
  res.send("You are logged in!")});
app.post('/create-acc', (req,res) => {
  res.post(path.resolve(BUILD_PATH,"Account created"))
});

httpServer.listen({  port: PORT }, () => {
  console.log(`server running on port ${PORT}`)
})