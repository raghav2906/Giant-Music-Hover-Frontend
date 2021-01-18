import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const  Artists = ()=>{
    const [data,setData] = useState([])
    const [artistName,setArtistName] = useState("")
    const [SongData,setSongData] = useState([])
    useEffect(()=>{
        fetch('/api/artists')
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                setData(result)
            })
            
    },[])

    const getsong = (name) => {
        // console.log(name)
        fetch(`/api/songsartist/${name}`)
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                setSongData(result)
            })
    }
    const submitForm = (e)=>{
        e.preventDefault();
        getsong(artistName)
    }
    return(
        <div>
            <nav style={{width:"30%",marginLeft:"30%",marginTop:"2%"}}>
                <div className="nav-wrapper #9c27b0 purple">
                    <form onSubmit={(e)=>{submitForm(e)}}>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="search artist" onChange={(e)=>setArtistName(e.target.value)} required/>
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        
        <div style={{display:"flex",flexDirection:"row"}}>
            <ul className="collection LeftScroll z-depth-5 with-header">
                <li className="collection-header"><h4>Artist</h4></li>
            {
                    data.map(item=>{
                        return (
                            <li className="collection-item avatar z-depth-2 LeftHiddenWala" onClick={()=>getsong(item.username)}>
                                <img src={item.img} alt="" className="circle"/>
                                <span className="title">{item.username}</span>
                    
                            </li>
                        )
                    })                    
                }
                
      
            </ul>
            <div style={{width:"60%",margin:"auto"}} className="artist-card" >
                {
                    SongData.map(item=>{
                        return(
                            <div className="card album-card" >
                                <a href={item.url} target="_blank"><img src={item.img}/>
                                <h4 className="card-title">{item.name}</h4></a>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
        </div>
    )
}

export default Artists