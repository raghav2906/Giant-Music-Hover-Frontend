import React, {useEffect, createContext, useReducer ,useContext} from 'react';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import './App.css';
import Home from './components/screens/Home'
import Navbar from './components/Navbar'
import Album from './components/screens/Album'
import Artists from './components/screens/Artists'
import Singup from './components/screens/singup'
import Login from './components/screens/login'
import {reducer,initialState} from './reducers/artistReducer'
import CreateSongs from './components/screens/CreateSong'
import CreateAlbums from './components/screens/CreateAlbum'

export const ArtistContext = createContext()


const Routing = ()=>{

  const history = useHistory()
  const {state,dispatch} = useContext(ArtistContext)
  useEffect(()=>{
    const artist = JSON.parse(localStorage.getItem("artist"))
    if(artist){
      dispatch({type:"ARTIST",payload:artist})
      // history.push('/')
    }else{
      history.push('/')
    }
  },[])

  return (
    <Switch>
      <Route path exact="/">
        <Home/>
      </Route>
      <Route path ="/artist">
        <Artists/>
      </Route>
      <Route path ="/album">
        <Album/>
      </Route> 
      <Route path ="/signup">
        <Singup/>
      </Route>
      <Route path ="/login">
        <Login/>
      </Route>
      <Route path ="/createsong">
        <CreateSongs/>
      </Route>
      <Route path ="/createalbum">
        <CreateAlbums/>
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <ArtistContext.Provider value={{state,dispatch}}>  
    <BrowserRouter>
      <Navbar/>
      <Routing/>
    </BrowserRouter>
    </ArtistContext.Provider>
  );
}

export default App;
