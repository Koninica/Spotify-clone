import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
useNavigate
const AlbumItem = ({image,name,desc,id}) => {//object destructuring props is an object conisting of all these keys
   
const navigate=useNavigate()
  return (
    <div onClick={()=>{
        navigate(`/album/${id}`)
    }} className='min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded'src={image} alt=""/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
