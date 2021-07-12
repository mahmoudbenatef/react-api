import React from 'react'

function TextError({children}) {
    return (
        <div style={{color:"red", fontSize:"20px"}}>
            {children}
        </div>
    )
}

export default TextError
