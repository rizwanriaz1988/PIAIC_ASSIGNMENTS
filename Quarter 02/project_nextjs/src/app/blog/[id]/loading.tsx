import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center'>
        <div className='border w-60 border-slate-700 bg-slate-800 my-6 rounded-md animate-pulse h-72'></div>
        <div className='border border-slate-700 my-6 mx-10 w-1/2 bg-slate-800 rounded-md h-screen animate-pulse '></div>
    </div>
  )}
export default Loading