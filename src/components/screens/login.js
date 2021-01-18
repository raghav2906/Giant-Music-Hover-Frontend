import React,{useState, useContext, useReducer} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {ArtistContext} from '../../App'

const Login = ()=>{
    const {state,dispatch} = useContext(ArtistContext)
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const OnLogin = () => {
        fetch('/api/login',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                mail:email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.Error){
                M.toast({html: data.Error,classes:"#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("artist",JSON.stringify(data.artist))
                dispatch({type:"ARTIST",payload:data.artist})
                M.toast({html: "Logged in succesfully",classes:"#43a047 green darken-1"})
                history.push('/')
            }
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field z-depth-5">
                <h2 className="Tagname">Artist Login</h2>
                
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={()=>OnLogin()}
                >
                    Login
                </button>
                <h5>
                    <Link to="/signup"><span style={{color:"#000"}}>Dont't have an account ?</span></Link>
                </h5>
            </div>
      </div>
    )
}

export default Login