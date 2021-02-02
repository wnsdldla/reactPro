import React,{Component} from "react";

class Toggle2 extends React.Component {
    constructor(props) {
      super(props);
     
  
      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.onHandleClick = this.onHandleClick.bind(this);
    }
  
    onHandleClick(msg) {
      console.log(msg)
     
    }
  
    render() {
      return (
        <button onClick={this.onHandleClick.bind(this,"BLA")}>
          Click!
        </button>

        
      );
    }
  }
  export {Toggle2}