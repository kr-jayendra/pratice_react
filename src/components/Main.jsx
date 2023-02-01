import React, { Component } from 'react'
import Child from './Child'
import Extents from './Extents'
import Mystate from './Mystate'

export default class Main extends Component {
    render() {
        return (
            <>

                <Extents name="jayendra" score={45} profile="meta-physics" >
                    <Child name="child_pro_level" age={8} des="just like difference to define but not declare because it's danger" />
                </Extents>

                <br />

                <Mystate />
            </>


        )
    }
}
