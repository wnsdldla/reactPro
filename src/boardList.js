import {Link} from "react-router-dom";
import BoardDetail from "./BoardDetail";
const boardLists=[
    {boardNum : 1, boardTitle : "공지 1번",boardContent : "오늘은 일요일",regDate : "2021.01.30",writer : "one"},
    {boardNum : 2, boardTitle : "공지 2번",boardContent : "오늘은 월요일",regDate : "2021.01.31",writer : "two"},
    {boardNum : 3, boardTitle : "공지 3번",boardContent : "오늘은 화요일",regDate : "2021.02.01",writer : "three"},
    {boardNum : 4, boardTitle : "공지 4번",boardContent : "오늘은 수요일",regDate : "2021.02.02",writer : "one"},
]

export const tableList =  boardLists.map((item)=>{
    
    return (
        <tr>
            <td>
                {item.boardNum}
            </td>
            <td>
                <Link to="/BoardDetail" render={prop=>(
                    <BoardDetail 
                    boardTitle={item.boardTitle} 
                    boardContent={item.boardContent}/>
                )}>
                    <a>
                        {item.boardTitle}
                    </a>
                </Link>
            </td>
            <td>
                {item.regDate}
            </td>
            <td>
                {item.writer}
            </td>
            <td style={{display:"none"}}>
                {item.boardContent}
            </td>
        </tr>
        
    )                       
});
