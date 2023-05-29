import React,{useState} from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import  slide1 from './Assets/1.jpg'
import  slide2 from './Assets/2.jpg'
import  slide3 from './Assets/3.jpg'
import slide4 from './Assets/4.jpg' 
import './App.css'

const App = () => {
   const [playSlide,setPlaySlide] = useState(true)
  return (
     <div className='slider-container'>
        {
           playSlide
              ?
              <AiFillPauseCircle className='fa-icon' onClick={() => setPlaySlide(!playSlide
              )} />
              :
              <AiFillPlayCircle  className='fa-icon' onClick={() => setPlaySlide(!playSlide
              )} />
        }
       
      
        <div className={playSlide?"slider play-animation":"slider pause-animation"}>
           <div className='slide'>
              <img src = {slide1} alt =  "slider" />
           </div>
           <div className='slide'>
              <img src = {slide2} alt =  "slider" />
           </div>
           <div className='slide'>
              <img src = {slide3} alt =  "slider" />
           </div>
           <div className='slide'>
              <img src = {slide4} alt =  "slider" />
           </div> 
        </div>
         
    </div>
  )
}

export default App
