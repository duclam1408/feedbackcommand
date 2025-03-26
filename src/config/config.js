import { MongoClient } from "mongodb";

const uri = "mongodb://admin:admin@localhost:27019/";
export const client = new MongoClient(uri);