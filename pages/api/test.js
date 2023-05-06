export default function handler(요청,응답){
    console.log(요청.query)
    return 응답.status(200).json();
    // if(요청.method == 'POST' ){ //각각 본인이 보내고싶을때 
    //     return 응답.status(200).json('처리완료'); //서버로 요청하고 제이슨을 쓰면 문자열로 아무거나 쓸수있음.
    //     //200은 성공 500에러  400은유저잘못에러
    // }
}

//서버만들라면 최상위 폴더에서 pages/api 폴더만들기