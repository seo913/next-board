'use client'

import Link from "next/link";

    export default async function ListItem({result}){

    return(
        <>
        {result.map((v, i) => {
        return (
            <div className='list-item' key={i} >
            <Link href={`./detail/${result[i]._id}`} >
                <h4>{result[i].title}</h4>
            </Link>
            <Link href={`./edit/${result[i]._id}`}>📝</Link>

            <span onClick={(e)=>{
                // fetch('/api/post/delete', {
                //     method : 'POST', 
                //     body : result[i]._id
                // }).then((r)=>{
                //     return r.json()
                // }).then(()=>{
                //     e.target.parentElement.style.opacity=0;
                //     setTimeout(()=>{
                //         e.target.parentElement.style.display='none';
                //     },1000)
                // })
            }}>🗑️</span>
            
            <p>1월 1일</p>
            </div>
        );
        })}
        </>
    )
}