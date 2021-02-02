import React from "react"
import './assets/css/main.css';
import {tableList} from "./boardList";
function Board(){
    
    return (
        <>
        
        <h2 className="major special">Board</h2>
        <div className="table-wrapper">
           <table>
               <thead>
                    <tr>
                        <ul class="actions small"
                            style={{float: "left",marginBottom:"0px"}}>
                            <li><a href="#" className="button primary small">작성</a></li>
                        </ul>
                    </tr>
                    <tr>
                        <th style={{width: "12%" }}><div align="center">공지 번호</div></th>
                        <th style={{width: "45%" }}><div align="left">공지 제목</div></th>
                        <th><div align="left">등록일</div></th>
                        <th><div align="left">등록자</div></th>
                    </tr>
               </thead>
               <tbody>                                     
                   {tableList}
               </tbody>
           </table>
        </div>
    
        </>
    )
}

export default Board