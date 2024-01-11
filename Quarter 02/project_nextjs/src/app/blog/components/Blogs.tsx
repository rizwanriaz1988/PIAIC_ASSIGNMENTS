import Link from 'next/link'
import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
// import { data } from '../page'

async function data(pagination: any) {
    const blogs_api = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${100 * (pagination - 1)}&limit=100`)
    if (!blogs_api.ok) {
        throw new Error("Failed to fetch data")
    }
    const blogs_json = blogs_api.json()
    return blogs_json
}

async function Blogs({ params }: { params: { blogs: number } }) {

    console.log(params.blogs)
    const bloges = await data(params.blogs)



    return (
       
                    <>
                        {bloges.blogs.map((blog: any) => (
                            <Link href={`/blog/${blog.id}`} key={`${params.blogs}/${blog.id}`} >
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
                    </>
                    
    )
}



















export default Blogs
export { data }