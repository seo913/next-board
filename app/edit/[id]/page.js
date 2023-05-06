import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import {ObjectId} from 'mongodb'; //ObjectId불러오는법 

export default async function Edit(props){
 //다이나믹 라우팅 /detail/1 이렇게 유알엘 주소 상세주소볼때
  const db = (await connectDB).db('forum'); //디비 불러오기2
  //디비 불러오기 findOne 써서 하나만 가져오기 전체가져오기아님
  let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) });  //findone 사용하면 한개
                                                //중복되는게 많기 때문에 아이디를 가져오고 
                                                //프롭스 부모한테 가져오는기능 하고 또 본인폴더경로와 배열오브젝트정보를가져옴
//   console.log(props.params.id); //디비에있는 아이디를 프롭스.파람스.아이디

    await db.collection('post').updateOne({_id: new ObjectId(props.params.id)},
    {$set:{title: props.params.title , content : props.params.content}});
                                                       //업데이트원은 글수정기능 
                                                       // 첫번째 중괄호는 수정할게시물 넘버
                                                       // 두번째 중괄호는 수정할 내용
    // console.log(result);
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className=" text-center mb-3 text-2xl font-bold">수정페이지</div>

            <form className="flex flex-col justify-center items-center" action="/api/post/edit" method="POST">  
                <input className="border w-80 h-10 border-blue-400 mb-3 " name="title" value={result.title}  />
                <input className="border w-80 h-10 border-blue-400" name="content" value={result.content} />
                <input style={{display : "none"}} 
                className="border w-80 h-10 border-blue-400" name="_id" defaultValue={result._id.toString()} />
                {/* 폼태그 사용할때  본인이 만든서버 유알엘적고 메소드에 포스트랑 겟만 사용할수있음 */}
                <button type="submit" className="bg-blue-300 hover:bg-blue-500 py-2 px-3 rounded-lg mt-2">수정하기</button>
            </form>
        </div>
    )
}
