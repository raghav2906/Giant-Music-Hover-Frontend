import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../../App.css'
import M from 'materialize-css'
import {ArtistContext} from '../../App'


const CreateAlbums = ()=>{
    const {state,dispatch} = useContext(ArtistContext)
    const history = useHistory()
    const [name,setName] = useState("")
    const [pic,setPic] = useState("")
    

    const CreateAlbum = ()=>{
        fetch('/api/createalbum',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            },
            body:JSON.stringify({
                name,
                pic
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.Error){
                M.toast({html: data.Error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.msg,classes:"#43a047 green darken-1"})
                history.push('/album')
            }
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className="mycard">
            <h4>Welcome {state.username}</h4>
            <div className="card auth-card input-field z-depth-5">
                <h2 className="Tagname">Creating album</h2>
                <input
                type="text"
                placeholder="album name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="image url"
                value={pic}
                onChange={(e)=>setPic(e.target.value)}
                />
                
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={()=>CreateAlbum()}
                >
                    Create Album
                </button>
                
            </div>
      </div>
    )
}

export default CreateAlbums