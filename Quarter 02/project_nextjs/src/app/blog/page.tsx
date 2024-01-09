import React from 'react'
import Blogs from './[blogs]/page'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"




async function completedata() {
    const blogs_api = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
    if (!blogs_api.ok) {
        throw new Error("Failed to fetch data")
    }
    const blogs_json = blogs_api.json()
    return blogs_json
}


async function Page() {

    const completedData = await completedata()
    const data_total_blogs = completedData.total_blogs
    const blogs_per_page = 100
    const no_of_pages = Math.ceil(data_total_blogs / blogs_per_page)
    const pages_array = Array.from({ length: no_of_pages }, (_, i) => i + 1)




    return (
        <div className='text-white'>
            <h1 >{data_total_blogs}</h1>


            <Pagination>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    {pages_array.map((page) => (
                        <PaginationItem key={page} >
                            <PaginationLink href={`/blog/${page}`} >{page}</PaginationLink>
                        </PaginationItem>
                    ))}


                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>

            <Blogs params={{ blogs: 1 }} />

        </div>
    )
}














export default Page
// export { data }