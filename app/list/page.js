

import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import Link from 'next/link'
import DetailLink from './DetailLink';
import ListItem from './ListItem';


export default async function List() {
  const db = (await connectDB).db('forum'); //디비 불러오기2 db('forum') 은 내가 만들어논 몽고디비저장소
  let result = await db.collection('post').find().toArray(); //디비 불러오기3 // 이 줄이 모든 데이터를가져와주세요.
  // console.log(result);

//전체 페이지 조회
//1.HTMl 페이지 필요
//2.페이지 들어가면 DB에서 글 가져오기
//3.글들을 HTML에 뿌리기
  return (
    <>
      <div className='list-bg'>
       <ListItem result={result}/>
      </div>
    </>
  );


}
