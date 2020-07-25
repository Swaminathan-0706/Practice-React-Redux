import React, { Component } from 'react'
import LChild from './LChild';

class LifeCycle extends Component {
    
    constructor(props){
        super(props);
        this.state={
            name:"john"
        }
        console.log('Constructor');
    }
    componentWillMount(){
        if(window.innerWidth<500){
            this.setState({
                innerWidth:window.innerWidth
            })
        }
        console.log("Component Will mount")
    }
    
    componentDidMount(){
        console.log("Component Did mount")
       
    }
    componentWillReceiveProps(){
        console.log("Component Will Receive Props")
    }
    clickhandler=()=>{
        this.setState({
            name:'thirdJohn'
        })
        // this.forceUpdate();
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should Component Update")
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log(" Component Did Update")
        console.log("PrevProps",prevProps)
        console.log("PrevState",prevState)
    }
    componentWillUnmount(){
        console.log("Child: Component Will Unmount");
    }
    render() {
        console.log("render")
        return (
            <div>
               <h1>LifeCycle method</h1> 
               <h3>ParentComponent</h3>
               Parentname:{this.state.name}<br/>
               innerwidth:{this.state.innerWidth}
               <button onClick={this.clickhandler}>Change State</button>
               <LChild name={this.state.name}/>
            </div>
        )
    }
}

export default LifeCycle

