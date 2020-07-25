import React, { Component } from 'react';

 class ReactClock extends Component {
     constructor(props) {
         super(props)
     
         
     
     
    

    function tickReact(){
        let time=new Date().toLocaleTimeString();
        const template=`<div><span>${time}</span></div>`;
        document.getElementById('clock').innerHTML=template;
   
    }
    setInterval(tickReact,1000);


}

    render() {
        return (
            <div > 
                
            React Clock
            <div id="clock"> 
                
            </div>
            </div>
        )
    }
}

export default ReactClock
