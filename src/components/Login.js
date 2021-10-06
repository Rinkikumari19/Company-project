import React from 'react'

function Login({isLogin}) {
    return (
        <div>
            <button id='loginBtn' onClick={()=>isLogin(true)}>Login</button>
        </div>
    )
}

export default Login

