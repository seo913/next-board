import { connectDB } from '@/util/database'; //디비 불러오기1 순서

export default async function handler(req,res){
    if(req.method === "POST"){
    if(req.body.title === ''){
        return res.status(500).json('제목 입력해주세요.');
    }
    try {
        const db = (await connectDB).db('forum'); //디비 불러오기2
        let result = await db.collection('post').insertOne(req.body); //디비 불러오기3 // 게시판 글 insertOne() 발행하는거
        return res.status(200).redirect(302,'/list'); // 리다이렉트 302,'경로' 완료하면 본인이 원하는 페이지로 이동
    } catch (error) {
        console.error(error);
    }
    }
}