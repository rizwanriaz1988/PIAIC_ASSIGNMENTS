"use client"
import React from 'react'
import Blogs from './components/Blogs'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState, useEffect } from 'react'





export default function Page() {
    const [isClient, setIsClient] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [completedData, setCompletedData] = useState<any>({});

    useEffect(() => {
        setIsClient(true)
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts/");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCompletedData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);




    const data_total_blogs = completedData.total_blogs              //1000
    const blogs_per_page = 100
    const no_of_pages = Math.ceil(data_total_blogs / blogs_per_page)    //10
    const pageNumbers = Array.from({ length: no_of_pages }, (_, i) => i + 1)    // 1,2,3,4,5,6,7,8,9,10



    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible    //2

    let activePages = pageNumbers.slice(
        Math.max(0, currentPage - 1 - pageNumLimit),    //0,-2
        Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)    //3,10
    );



    const handleNextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPages = () => {
        const renderedPages = activePages.map((page, idx) => (
            <PaginationItem
                key={idx}
                className={currentPage === page ? "bg-[#f0f0f0] text-black rounded-md" : ""}
            >
                <PaginationLink onClick={() => setCurrentPage(page)} href={''}>
                    {page}
                </PaginationLink>
            </PaginationItem>
        ));

        // Add ellipsis at the start if necessary
        if (activePages[0] > 1) {
            renderedPages.unshift(
                <PaginationEllipsis
                    key="ellipsis-start"
                    onClick={() => setCurrentPage(activePages[0] - 1)}
                />
            );
        }

        // Add ellipsis at the end if necessary
        if (activePages[activePages.length - 1] < pageNumbers.length) {
            renderedPages.push(
                <PaginationEllipsis
                    key="ellipsis-end"
                    onClick={() =>
                        setCurrentPage(activePages[activePages.length - 1] + 1)
                    }
                />
            );
        }

        return renderedPages;
    };
    return (
        <>
            <div className="  flex justify-center">
                <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-10/12 sm:w-5/12 lg:w-8/12">
                    <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
                        <h1 className="text-yellow-400 text-4xl">Blog App</h1>
                    </div>
                    <div className=" bg-black my-0.5 rounded-md px-8  flex flex-col">
                        {/*====================== Main Div for working ====================*/}
                        {/*============================= Start ============================*/}

                        {isClient ? (

                            <div className='text-white '>
                                {/* <h1 >{data_total_blogs}</h1> */}

                                <div className='my-3'>
                                    <Pagination>
                                        <PaginationContent>

                                            <PaginationItem>
                                                <PaginationPrevious onClick={handlePrevPage} href={''} />
                                            </PaginationItem>

                                            {renderPages()}

                                            <PaginationItem>
                                                <PaginationNext onClick={handleNextPage} href={''} />
                                            </PaginationItem>

                                        </PaginationContent>
                                    </Pagination>
                                </div>

                                {/* ========================================= */}
                                <Blogs params={{ blogs: currentPage }} />

                            </div>

                        ) : (
                            <div>Loading...</div>
                        )}

                        {/*============================== End =============================*/}
                        {/*====================== Main Div for working ====================*/}
                    </div>
                </div>
            </div>

        </>

    )
}

