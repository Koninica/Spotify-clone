import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
const SongItem = ({name,image,desc,id}) => {

   const {playwithId}=useContext(PlayerContext)
  return  (
    <div onClick={()=>{
      playwithId(id) //we are creating arrow function because we need to pass the id so need to call with bracktes not directly thats why we create the arrow func first
    }} className='min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img src={image} alt=""/>  
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
