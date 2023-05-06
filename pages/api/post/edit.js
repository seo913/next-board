import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function update(req,res){
    if(req.method ==="POST"){
        // console.log(req.body)
        let ch = {
            title : req.body.title, 
            content:req.body.content
        }

        const db = (await connectDB).db('forum'); //디비 불러오기2
        const result = await db.collection('post').updateOne(
            {_id:new ObjectId(req.body._id)},
            {$set: ch}
            );  //업데이트원은 글수정기능 
        res.status(200).redirect(302,'/list');
    }
}