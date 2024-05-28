import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/chai";

const client = new MongoClient(uri);

  try {
    const database = client.db('facemash');
    const images = database.collection('images');
    const allImages = await images.find({}).toArray();
    return NextResponse.json({allImages})
  } finally {
    await client.close();
  }
}
