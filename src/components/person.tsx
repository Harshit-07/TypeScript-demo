type fullName = {
    name:{
        first:String,
        last:String
    }
}
const person = (props:fullName) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

export default person
