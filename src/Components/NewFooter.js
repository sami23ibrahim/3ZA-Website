import React from 'react'
import VideoLogo from './VideoLogo';


export default function NewFooter() {
  return (
    <div 
        className='relative h-[100%] '
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
            <div className='h-[0px] sticky top-[calc(100vh-800px)]'>
            <VideoLogo/>
            </div>
        </div>
    </div>
  )
}