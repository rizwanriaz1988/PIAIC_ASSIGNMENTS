import React from 'react'
import { data } from '../page'




async function Blog({ params }: { params: { id: string } }) {

    const bloged = await data()


    return (
        <div className='justify-center flex'>

        <div className='text-white my-6 mx-10 w-1/2 bg-slate-950 rounded-md '>
            {bloged.blogs.map((blog: any) => (blog.id == params.id &&
                <div className='flex flex-col ' key={blog.id}>

                    <div>
                        {/* <img src={blog.photo_url} alt={blog.title} className='w-full h-60 rounded-t-md' /> */}
                        <img src={blog.photo_url} alt={blog.title} className='object-cover h-60 w-full rounded-t-md' />
                    </div>


                    <div className='px-5 py-5 border border-t-0 border-slate-800'>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ">{blog.title}</h1>
                        <p className="leading-7 text-yellow-500">{blog.description}</p>
                        <p className="scroll-m-20 text-sx font-bold tracking-tight lg:text-sm my-2 text-slate-600">{blog.created_at}  |  {blog.category.toUpperCase()}</p>
                        {/* <h1 className="scroll-m-20 text-sx font-extrabold tracking-tight lg:text-sm "></h1> */}
                        {/* <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">{blog.content_text}</p> */}
                        <div dangerouslySetInnerHTML={{ __html: blog.content_html }}></div>
                    </div>

                </div>

            ))}
        </div>
        </div>
    )
}

export default Blog