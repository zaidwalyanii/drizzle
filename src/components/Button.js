import React from 'react'

function Button({ content, onClick, className }) {
    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    )
}

export default Button