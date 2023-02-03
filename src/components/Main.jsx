import React, { Component } from 'react'
import Child from './Child'
import Counter from './Counter'
import CounterUseEffect from './CounterUseEffect'
import { CounterUseState } from './CounterUseState'
import CounterUsingFunction from './CounterUsingFunction'
import Extents from './Extents'
import FetchingData from './FetchingData'
import Form from './Form'
import FormUsingUseState from './FormUsingUseState'
import { HookMouseMove } from './HookMouseMove'
import LifeCycleA from './LifeCycleA'
import { MouseContainer } from './MouseContainer'
import Mystate from './Mystate'
import Navbar from './Navbar'
import ParentCom from './ParentCom'
import ParentComponent from './ParentComponent'
import ParentFocus from './ParentFocus'
import ParetnFRInput from './ParetnFRInput'
import RefDemo from './RefDemo'
import { UseStateUsingArr } from './UseStateUsingArr'

export default class Main extends Component {
    render() {
        console.log("🚀 ~ file: Main.jsx:11 ~ Main")
        return (
            <>
                {/* <Extents name="jayendra" score={45} profile="meta-physics" >
                    <Child name="child_pro_level" age={8} des="just like difference to define but not declare because it's danger" />
                </Extents>

                <br />

                <Mystate /> */}

                {/* <Counter /> */}

                {/* <ParentCom /> */}
                {/* <Form /> */}
                {/* <LifeCycleA /> */}
                {/* <ParentComponent /> */}
                {/* <RefDemo /> */}
                {/* <ParentComponent /> */}
                {/* <ParentFocus /> */}
                {/* <ParetnFRInput /> */}
                {/* <CounterUsingFunction /> */}
                {/* <FormUsingUseState /> */}
                {/* <UseStateUsingArr /> */}
                {/* <Counter /> */}
                {/* <CounterUseState /> */}
                {/* <Counter /> */}
                {/* <HookMouseMove /> */}
                {/* <MouseContainer /> */}
                {/* <CounterUseEffect /> */}
                <Navbar />
                <FetchingData />
            </>


        )
    }
}
