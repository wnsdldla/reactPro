const boardList=[
    {boardNum : "1", boardTitle : "공지 1번",regDate : "2021.01.30",writer : "one"},
    {boardNum : "2", boardTitle : "공지 2번",regDate : "2021.01.31",writer : "two"},
    {boardNum : "3", boardTitle : "공지 3번",regDate : "2021.02.01",writer : "three"},
    {boardNum : "4", boardTitle : "공지 4번",regDate : "2021.02.02",writer : "one"},
]
export const tableList =  boardList.map((item)=>{
    return (
        <tr>
            <td>
                {item.boardNum}
            </td>
            <td>
                {item.boardTitle}
            </td>
            <td>
                {item.regDate}
            </td>
            <td>
                {item.writer}
            </td>
        </tr>
    )                       
});