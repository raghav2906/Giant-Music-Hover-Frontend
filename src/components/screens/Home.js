import React, { useState } from 'react'

const  Home = ()=>{

    const [songName,setSongName] = useState("")
    const [SongData,setSongData] = useState([])

    const getsong = (name) => {
        // console.log(name)
        fetch(`/api/songsname/${name}`)
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                setSongData(result)
            })
    }
    const submitForm = (e)=>{
        e.preventDefault();
        getsong(songName)
    }
    return(
        <div>
        <div className="HomeMain">
            <div className="HomeDiv z-depth-2"><span style={{fontSize:"4rem"}}>Welcome to this amazing Website</span></div>
            
        </div>
            <nav style={{width:"30%",marginLeft:"30%",marginTop:"2%"}}>
                <div className="nav-wrapper #9c27b0 purple">
                    <form onSubmit={(e)=>{submitForm(e)}}>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="search song" onChange={(e)=>setSongName(e.target.value)} required/>
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
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
    )
}

export default Home