import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {

        this.setState(prv => { return { count: prv.count + 1 } })
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })


        // for (let i = 0; i < 5; i++) {

        //     this.setState((prev) => {
        //         return {
        //             count: prev.count + 1
        //         }f
        //     })
        // }
    }

    decrement(e) {
        
        this.setState(prev => {  return prev.count != 0 ?  { count : prev.count - 1 } : {count: 0}})
        // for (let i = 0; i < 5; i++) {
        //     this.setState((prev) => {
        //         if (prev.count > 5) {

        //             return {
        //                 count: prev.count - 1
        //             }
        //         } else {

        //             return {
        //                 count: 0
        //             }
        //         }
        //     })
        // }

    }


    render() {
        return (
            <>
                <h1 style={{ fontSize: "60px" }}>{this.state.count}</h1>
                {/* Event Handler */}
                <button className='btn' onClick={this.increment}>Increment</button>
                <button className='btn' onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
