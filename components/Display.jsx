import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
   
  const displayref=useRef();
  const location=useLocation();
  //console.log(location)//will display all the details about the current website like pathname etc
  const isAlbum=location.pathname.includes('album');//will return true if we are on the album router 
  //console.log(isAlbum)
  //using this album id we can get the color code from the albumData array that we exported 
  const ablumId=isAlbum?location.pathname.slice(-1):"";//slice(-1) will give the string at the last index of the given string
  const bgColor=albumsData[Number(ablumId)].bgColor//to convert the album id to number from string
  ///.log(bgColor);
   
  useEffect(function(){
    if(isAlbum){
      displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
      displayref.current.style.background=`#121212`
    }
  })
  return (
    <div ref={displayref} className='w-full m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
         <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
