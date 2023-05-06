export default function Write(){
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className=" text-center mb-3 text-2xl font-bold">글작성</div>

            <form className="flex flex-col justify-center items-center" action="/api/post/new" method="POST">  

                <input className="border w-80 h-10 border-blue-400 mb-3 " name="title" placeholder="제목" />
                <input className="border w-80 h-10 border-blue-400" name="content" placeholder="내용"/>
                {/* 폼태그 사용할때  본인이 만든서버 유알엘적고 메소드에 포스트랑 겟만 사용할수있음 */}
                <button type="submit" className="bg-blue-300 hover:bg-blue-500 py-2 px-3 rounded-lg mt-2">버튼</button>
            </form>
        </div>
    )
}