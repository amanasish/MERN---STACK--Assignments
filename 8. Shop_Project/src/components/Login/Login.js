import React from 'react'

export const Login = () => {
return (
    <div>
        <div className="form-login">
            <input type="text" placeholder="Enter Email" onChange={emailHandler}/>
        </div>

        <div className="form-login">
            <input type="text" placeholder="Enter Password" onChange={passwordHandler}/>
        </div>

        <div className="form-login">
            <button className="button_login">Login</button>
        </div>
    </div>
)
}
