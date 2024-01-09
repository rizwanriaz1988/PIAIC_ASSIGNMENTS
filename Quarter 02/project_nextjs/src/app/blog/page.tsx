import Link from 'next/link'
import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'

async function data() {
    const blogs_api = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=30")
    if (!blogs_api.ok) {
        throw new Error("Failed to fetch data")
    }
    const blogs_json = blogs_api.json()
    return blogs_json
}

async function Blogs() {


    const bloges = await data()



    return (
        <div className="  flex justify-center">
            <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-10/12 sm:w-5/12 lg:w-8/12">
                <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
                    <h1 className="text-yellow-400 text-4xl">Blog App</h1>
                </div>
                <div className=" bg-black my-0.5 rounded-md p-8 ">
                    {/*====================== Main Div for working ====================*/}
                    {/*============================= Start ============================*/}
                    {bloges.blogs.map((blog: any) => (

                        <Link href={`/blog/${blog.id}`} key={blog.id} >
                            <div className='bg-slate-800 rounded-sm hover:scale-105 hover:bg-slate-900 transition duration-150  text-white mb-5 flex items-center flex-col md:flex-row p-5 gap-5'>
                                <Image src={blog.photo_url} alt="" width={200} height={200} className=' md:size-32 rounded-sm ' />

                                <div className=''>
                                    <h1 className="text-2xl font-bold text-yellow-600">{blog.title}</h1>
                                    <h3 className='text-xs my-2 text-slate-400'>{dayjs(blog.created_at).format('DD MMM-YY')} | {blog.category}</h3>
                                    <p className='break-words line-clamp-3'>{blog.content_text}</p>

                                </div>
                            </div>
                        </Link>




                    ))}
                    {/*============================== End =============================*/}
                    {/*====================== Main Div for working ====================*/}
                </div>
            </div>
        </div>
    )
}

export default Blogs
export { data }