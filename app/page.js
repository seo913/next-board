import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"



export default async function Home() {

  const db = (await connectDB).db("forum")  
  let result = await  db.collection('post').find().toArray() //포스트에있는 모든 자료를 어레이로 꺼내주세요.
  console.log(result);
  
  return (
   <div>hi</div>
  )
}
