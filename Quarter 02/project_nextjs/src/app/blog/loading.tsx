import React from 'react'

function LoadingDesign() {
  return (
    <>
    <div className="  flex justify-center">
    <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-10/12 sm:w-5/12 lg:w-8/12">
      <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
        <h1 className="text-yellow-400 text-4xl">Blog App</h1>
      </div>
      <div className=" bg-black my-0.5 rounded-md px-2  flex flex-col">
        {/*====================== Main Div for working ====================*/}
        {/*============================= Start ============================*/}



      <div className='gap-5 flex md:flex-col mx-6 flex-row my-3 items-center '>
        
        <div className="w-1/2   bg-slate-800 rounded-md h-8 mt-4 animate-pulse"></div>
        <div className="w-full  bg-slate-800 rounded-md h-32 animate-pulse"></div>
        <div className="w-full  bg-slate-800 rounded-md h-32 animate-pulse"></div>
        <div className="w-full  bg-slate-800 rounded-md h-32 animate-pulse"></div>
      </div>

        
                {/*====================== Main Div for working ====================*/}
                {/*============================== End =============================*/}
      </div>
    </div>
  </div>

</>
  )
}

export default LoadingDesign