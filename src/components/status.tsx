type StatusProps = {
    //for specific strings/int use Union
    message : 'loading' | 'success' | 'error'
}

const status = (props:StatusProps) => {
    let message;
    if(props.message === 'loading'){
        message = 'Your page is loading..'
    }
    else if(props.message === 'success'){
        message = 'Success..'
    }
    else if(props.message === 'error'){
        message = 'Error..'
    }
    return (
        <div>
            Status - {message}
        </div>
    )
}

export default status
