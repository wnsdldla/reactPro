import React from "react"
import {Link} from "react-router-dom";
import './assets/css/main.css';

function BoardDetail({ boardTitle, boardContent}){
    
    console.log(boardTitle);
    
    return (
        <>
        
        <h2 className="major special" style={{marginLeft:"5em"}}>  BoardDetail</h2>
        <div className="wrapper">
            <div className="inner">
                <div className="row gtr-200">
                   
                    <div className="col-12 col-12-medium">
                    <h3>제목 : {boardTitle}</h3>
                    <div className="box">
                        <p>
                            {boardContent}
                        </p>
                    </div>
                    <ul className="actions small" style={{float:"right"}}>
                        <li><Link to="/Board">
                        <button>목록</button>
                        </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    
        </>
    )
}

export default BoardDetail