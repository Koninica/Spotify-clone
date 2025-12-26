import { useState } from "react";
import { createContext, useRef } from "react";
import { songsData } from "../assets/assets";
import { useEffect } from "react";

export const PlayerContext=createContext();
const PlayerContextProvider=(props)=>{
    const audioRef=useRef();//this is for the song to be played
    const seekBg=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(songsData[0]);
    const [playStatus,setPlayStatus]=useState(false)
    const [time,setTime]=useState({
      currentTime:{
        second:0,
        minute:0
      },
      totalTime:{
        second:0,
        minute:0
      }
    })
      

const play=()=>{
  audioRef.current.play();
  setPlayStatus(true)
}

const pause=()=>{
  audioRef.current.pause()
  setPlayStatus(false)
} 

//this is async bcoz we'll wait for this function to execute before we move on to another function
const playwithId=async(id)=>{//this function will enanble to play the song which we click on by getting the id
   await setTrack(songsData[id])//first we will set track to the new song we selected
   await audioRef.current.play()//wait for it to play the track
   setPlayStatus(true)//play status should be true
}

const prev=async()=> {
  if(track.id>0){
    await setTrack(songsData[track.id-1]);
    await audioRef.current.play();
    setPlayStatus(true)
  }
}

const next=async()=> {
  if(track.id<songsData.length-1){
    await setTrack(songsData[track.id+1]);
    await audioRef.current.play();
    setPlayStatus(true)
  }
}

const seekSong=async(event)=>{
   console.log(event)//we will get the event click in the console under the event properties we have offsetX value we will ise that for the length to be covered in green
    audioRef.current.currentTime=((event.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)

  }

useEffect(function(){
   setTimeout(()=>{//added because this will run the code at the intervel of 1 second everytime
     audioRef.current.ontimeupdate=()=>{
      seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";//we will get the percentage of the song that is completed and accordingly we will increase the width of the
        setTime({
         currentTime:{
        second:Math.floor(audioRef.current.currentTime%60),//remainder will give seconds
        minute:Math.floor(audioRef.current.currentTime/60)//minutes
      },
      totalTime:{
        second:Math.floor(audioRef.current.duration%60),
        minute:Math.floor(audioRef.current.duration/60)
      }
        })
     } 
    
   },1000)
},[audioRef])

   const contextValue={
     audioRef,
     seekBg,//for seek bar bg green color that will be updating
     seekBar,//for seekbar
     track,setTrack,
     playStatus,setPlayStatus,
     time,setTime,
     play,pause,
     playwithId,
     prev,
     next,
     seekSong
   }
   return(
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
   )
}
export default PlayerContextProvider