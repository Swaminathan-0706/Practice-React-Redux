import React, { Component } from 'react'

 class LChild extends Component {
     constructor(props) {
         super(props)
     
         console.log('Child:Construtor');
     }
     componentWillMount(){
        console.log('Child:component WillMount');
     }
     componentDidMount(){
        console.log('Child:component DidMount');
        
     }
     componentWillReceiveProps(){
        console.log("Child:Component Will Receive Props")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Child:Should Component Update")
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Child: Component Did Update")
        console.log("Child:PrevProps",prevProps)
        console.log("Child:PrevState",prevState)
    }
    componentWillUnmount(){
        console.log("Child: Component Will Unmount");
    }
    render() {
        console.log('Child: Render');
        return (
            <div>
                <h3>ChildComponent</h3>
                ChildName:{this.props.name}
            </div>
        )
    }
}

export default LChild
