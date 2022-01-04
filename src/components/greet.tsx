import React from 'react'
type GreetProps = {
    name:String,
    greetCount?:number, //to make it optional prop
    isLoggedIn:boolean
}

const greet = (props:GreetProps) => {
    const { greetCount = 0} = props //for making default value of a prop
    return (
        <div>
            {
                props.isLoggedIn ? <h1>Good Morning! {props.name} Your count is {greetCount} </h1> :
                                   <h2>Welcome Guest!</h2>
            }
        </div>
    )
}

export default greet
