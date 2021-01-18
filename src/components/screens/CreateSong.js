import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../../App.css'
import M from 'materialize-css'
import {ArtistContext} from '../../App'

const CreateSongs = ()=>{

    const {state,dispatch} = useContext(ArtistContext)
    // console.log(state)
    const history = useHistory()
    const [name,setName] = useState("")
    const [img,setImg] = useState("")
    const [url,setUrl] = useState("")
    const [album,setAlbum] = useState("")
    const [lang,setLang] = useState("")
    const [artists,setArtists] = useState("")

    const CreateSong = ()=>{
        fetch('/api/createsong',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem('jwt')}`
            },
            body:JSON.stringify({
                name:name,
                img:img,
                url,
                lang,
                album,
                artists:artists.split(",")
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
                <h2 className="Tagname">Creating song</h2>
                <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="album"
                value={album}
                onChange={(e)=>setAlbum(e.target.value)}
                />
                <input
                type="text"
                placeholder="lang"
                value={lang}
                onChange={(e)=>setLang(e.target.value)}
                />
                <input
                type="text"
                placeholder="image url"
                value={img}
                onChange={(e)=>setImg(e.target.value)}
                />
                <input
                type="text"
                placeholder="youtube url"
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                />
                <input
                type="text"
                placeholder="list of artist separated by ,"
                value={artists}
                onChange={(e)=>setArtists(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                    onClick={()=>CreateSong()}
                >
                    Create Song
                </button>
                
            </div>
      </div>
    )
}

export default CreateSongs