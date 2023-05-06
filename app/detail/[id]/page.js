//다이나믹 라우팅 /detail/1 이렇게 유알엘 주소 상세주소볼때
import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import {ObjectId} from 'mongodb'; //ObjectId불러오는법 

//상세페이지만들기
//1.글제목누르면 상세페이지 이동
//2.상세페이지 방문시 DB에서 글 1개 꺼내서 html에 보여주기
//비슷한폴더가 많을때 dynamic route 폴더로 사용

export default async function  Detail(props){

  const db = (await connectDB).db('forum'); //디비 불러오기2
  //디비 불러오기 findOne 써서 하나만 가져오기 전체가져오기아님
  let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) });  //findone 사용하면 한개
                                                //중복되는게 많기 때문에 아이디를 가져오고 
                                                //프롭스 부모한테 가져오는기능 하고 또 본인폴더경로와 배열오브젝트정보를가져옴
//   console.log(props.params.id); //디비에있는 아이디를 프롭스.파람스.아이디
    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}
