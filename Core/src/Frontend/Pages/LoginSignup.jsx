import { useState } from 'react'


export default function LoginSignUp(){
    const [ email,setEmail ] = useState('')
    const [ password,setPassword ] = useState('')

    const logun
    return (
        <div>
            <h1 style={{color: 'black'}}>Login</h1>

            <form>
                <input  type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}