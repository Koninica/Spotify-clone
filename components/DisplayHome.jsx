import React from 'react'
import Navbar from './Navbar'
import { assets,albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
const DisplayHome = () => {
  return (
    <>
     <Navbar/>
     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map(function(elem,idx){
          return <AlbumItem key={idx} image={elem.image} name={elem.name} desc={elem.desc} id={elem.id}/>
        })}
        </div>
     </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map(function(elem,idx){
          return <SongItem key={idx} image={elem.image} name={elem.name} desc={elem.desc} id={elem.id}/>
        })}  
      </div>
      </div>    
    </>
  )
}

export default DisplayHome
