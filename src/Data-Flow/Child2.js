import React, { Component } from 'react'

class Child2 extends Component {
    render() {
        return (
            <div>
                I'm child2:{this.props.valuetoChild2}
            </div>
        )
    }
}

export default Child2

