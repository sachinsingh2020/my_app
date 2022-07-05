import React from 'react'

function Alert(props) {
    const Captialize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        props.alert && <div class="alert alert-primary" role="alert">
            <strong>{Captialize(props.alert.type)}</strong> : {props.alert.msg}
        </div>

    )
}

export default Alert

