type PersonNameProps = {
    names :{
        first:String,
        last:String
    }[]
}

const persons = (props:PersonNameProps) => {
    return (
        <div>
            {props.names.map(name => {
                return(
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}

export default persons
