import React from 'react'
import { data } from '../page'

async function auth(auth_id: string) {
    const auth_api = await fetch(`https://api.slingacademy.com/v1/sample-data/users/${auth_id}`)
    if (!auth_api.ok) {
        throw new Error("Failed to fetch data")
    }
    const auth_json = auth_api.json()
    return auth_json
}


async function Blog({ params }: { params: { id: string } }) {

    const bloged = await data()

    const authed = await auth(params.id)


    return (
        <>
            <div className='justify-center flex flex-row-reverse'>

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


                {/* <div className='text-white my-6 w-1/6 bg-slate-950 rounded-md p-6 '> */}
                <div className='text-white border border-slate-800 my-6 rounded-md pt-6 flex flex-col h-1/4'>
                    <div className='flex justify-center'>
                        <img src={authed.user.profile_picture} alt={authed.user.title} className=' size-24 rounded-full bg-slate-900' />
                    </div>

                    <div className='p-2 text-slate-500' >
                        <div className='flex flex-col items-center text-white'>
                        <h1 className='text-yellow-500'>{authed.user.first_name} {authed.user.last_name}</h1>
                        <h1 className='text-yellow-500 text-xs'>{authed.user.job}</h1>
                        </div >

                        <div className='py-2'>
                        <h1>{authed.user.gender.toUpperCase()}</h1>
                        <h1>DOB: {authed.user.date_of_birth}</h1>
                        </div>

                        <div className='border-t-2 border-slate-800 py-2 my-2 flex flex-col justify-center'>
                        <h1>Address<br/>{authed.user.street},{authed.user.city}</h1>
                        <h1>{authed.user.zipcode},{authed.user.state},{authed.user.country}</h1>
                        </div>

                        <div className='border-t-2 border-slate-800 my-2 py-2'>
                            
                        <h1>{authed.user.phone}</h1>
                        <h1>{authed.user.email}</h1>
                        </div>



                    </div>





                </div>




            </div>



        </>
    )
}

export default Blog