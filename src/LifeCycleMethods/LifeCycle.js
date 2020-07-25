import React, { Component } from 'react'

class LifeCycle extends Component {

    componentWillMount(){
        console.log("Component Will mount")
    }
    
    componentDidMount(){
        console.log("Component Did mount")
    }
    // shouldComponentUpdate(){
    //     return true;
    // }
    render() {
        console.log('render');
        return (
            <div>
               Check LifeCycle method 
            </div>
        )
    }
}

export default LifeCycle

