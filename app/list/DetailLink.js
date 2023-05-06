'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink(){
   const router= useRouter() //클라이언트 안에서 쓸수있음  서버클라이언트는안됌
//    const a = usePathname(); //현재 유알엘 출력
//    const b= useSearchParams(); //쿼리스트링 다 출력 
    return(
        <button onClick={()=>{router.push('/')}}>버튼</button>   // push() 이동할경로
                        //라우터를 이용한 페이지 이동방식  
                        //1. back()뒤로가기 / forward()앞으로가기 / refresh() 새로고침(변동이있는새로고침 윈도우전체말고)
                        // prefetch() 페이지를 미리 로드시켜줘서 매우빠르게 먼저 파일이 보임 (근데 링크태그가 프리패치가 이미 들어가있음)
    )
}