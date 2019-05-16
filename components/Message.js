import React from 'react'

// component qui gère les messages du chat
const Message = ({ pseudo, message }) => {

    return (

        <p className = 'user-message'>
            { message }
        </p>
    )
}
export default Message