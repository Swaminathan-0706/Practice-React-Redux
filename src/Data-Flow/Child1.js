import React, { Component } from 'react';

class Child extends Component {
    
        
        
        
        
        
        
    

        childFunction=(e)=>{
                
            e.preventDefault();
            console.log(this.props);
            console.log('Hi');
            this.props.functionCallFromParent("Hello From Child1");
        }


    
    render() {
        return (
            <div>
                I m child:{this.props.valueFromParent}
                <button onClick={(e)=>this.childFunction(e)}>Click</button>
            </div>
        )
    }
}

export default Child

