import React, { Component } from 'react';
import Child from './Child1';
import Child2 from './Child2';

class Parent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             childToParent:null
        }
    }
    
        
        value="ChildDataFromParent";
        parentFunction=(data_from_child)=>{
            console.log(data_from_child);
            this.setState({
                childToParent:data_from_child
            })
        }
        
        


    render() {
        return (
            <div>
                
               I'm Parent:{this.state.childToParent}
               <Child valueFromParent={this.value} functionCallFromParent={this.parentFunction}/>
               <Child2 valuetoChild2={this.state.childToParent}/>
            </div>
        )
    }
}

export default Parent
