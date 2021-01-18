import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../../App.css'
import M from 'materialize-css'

const Signup = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")

    const OnLogin = ()=>{
        fetch('/api/createartist',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                username:name,
                mail:email,
                password,
                img:image
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.Error){
                M.toast({html: data.Error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.msg,classes:"#43a047 green darken-1"})
                history.push('/login')
            }
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field z-depth-5">
                <h2 className="Tagname">Artist Signup</h2>
                <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
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
                <input
                type="text"
                placeholder="img url"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={()=>OnLogin()}
                >
                    SignUp
                </button>
                <h5>
                    <Link to="/login"><span style={{color:"#000"}}>Already have an account ?</span></Link>
                </h5>
            </div>
      </div>
    )
}

export default Signup