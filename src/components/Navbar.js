import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {ArtistContext} from '../App'

const NavBar = ()=>{
  const {state,dispatch} = useContext(ArtistContext)
  const history = useHistory()
  const renderList = ()=>{
    if(state){
      return [
        
        <li><Link to="/album" style={{fontSize:"1.5rem"}} >Album</Link></li>,
        <li><Link to="/artist" style={{fontSize:"1.5rem"}} >Artist</Link></li>,
        <li><Link to="/createsong" style={{fontSize:"1.5rem"}} >CreateSong</Link></li>,
        <li><Link to="/createalbum" style={{fontSize:"1.5rem"}} >CreateAlbum</Link></li>,
        <li>
          <button className="btn #4a148c purple darken-4"
          onClick={()=>{
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/login')
          }}
          >
            Logout
          </button>
        </li>

      ]
    }else{
      return [
        
        <li><Link to="/album" style={{fontSize:"1.5rem"}} >Album</Link></li>,
        <li><Link to="/artist" style={{fontSize:"1.5rem"}} >Artist</Link></li>,
        <li><Link to="/login" style={{fontSize:"1.5rem"}} >Login</Link></li>,
        <li><Link to="/signup" style={{fontSize:"1.5rem"}} >Signup</Link></li>

      ]
    }
  }
    return (
        <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper #311b92 deep-purple darken-4">
        <Link to="/" className="brand-logo" style={{fontSize:"3rem"}} >Giant music</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
        </ul>
      </div>
    </nav>
  </div>
    )
}

export default NavBar