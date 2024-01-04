"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



function ProductSec() {

    const products_db = [
        {
            name: "Brushed Raglan Sweatshirt",
            price: "$195.00",
            image: "\product1.png",
            sub_images: ["\product1.png"],
            product_detail: ` 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Sweater",
            family: "Female"
        },
        {
            name: "Cameryn Sash Tie Dress",
            price: "$545.00",
            image: "\product2.png",
            sub_images: ["\product2-1.png", "\product2-2.png", "\product2-3.png", "\product2-4.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit"],
            category: "Dress",
            family: "Female",
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
        },
        {
            name: "Flex Sweatshirt",
            price: "$175.00",
            image: "\product3.png",
            sub_images: ["\product3.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Sweater",
            family: "Female"
        },
        {
            name: "Flex Sweatpants",
            price: "$175.00",
            image: "\product4.png",
            sub_images: ["\product4.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Pants",
            family: "Female"
        },
        {
            name: "Pink Fleece Sweatpants",
            price: "$195.00",
            image: "\product5.png",
            sub_images: ["\product5.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Pants",
            family: "Female"
        },
        {
            name: "Lite Sweatpants",
            price: "$150.00",
            image: "\product6.png",
            sub_images: ["\product6.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Kids",
            family: "Female"
        },
        {
            name: "Imperial Alpaca Hoodie",
            price: "$525.00",
            image: "\product7.png",
            sub_images: ["\product7.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Jackets",
            family: "Female"
        },
        {
            name: "Flex Push Button Bomber",
            price: "$225.00",
            image: "\product8.png",
            sub_images: ["\product8.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Jackets",
            family: "Male"
        },
        {
            name: "Muscle Tank",
            price: "$75.00",
            image: "\product9.png",
            sub_images: ["\product9.png"],
            product_detail: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "T Shirts",
            family: "Female"
        },
        {
            name: "Brushed Bomber",
            price: "$225.00",
            image: "\product10.png",
            sub_images: ["\product10.png"],
            product_detail: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["", "", "", ""],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Jackets",
            family: "Female"
        },
        {
            name: "Raglan Sweatshirt",
            price: "Sweater",
            image: "\product11.png",
            sub_images: ["\product11.png"],
            product_detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            product_care: ["Hand wash using cold water.", "Do not using bleach.", "Hang it to dry.", "Iron on low temperature."],
            quantity: 10,
            sizes: ["XS", "S", "M", "L", "XL"],
            category: "Jackets",
            family: "Male"
        },

    ]

    return (
        <div className=' mx-32 my-16 '>

            {/* ========================================================== */}
            <div className='flex items-center flex-col gap-2 mb-8'>

                <span className='text-[#0062f5] tracking-widest text-xs font-bold'>PRODUCTS</span>
                <h2 className=' text-[32px] font-bold'>Check What We Have</h2>
            </div>

            {/* ======================================================= */}


            <div className=''>

                <Carousel
                    opts={{
                        align: "start",

                    }}
                    className="w-full "
                >
                    <CarouselContent>
                        {products_db.map((product: any, index: any) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-full px-0 hover:scale-110 transition duration-500  ">
                                <div className="py-4 ">
                                    {/* <Card> */}
                                    {/* <CardContent className="flex aspect-square items-center justify-center p-6" > */}
                                    {/* <span className="text-3xl font-semibold"> */}
                                    <img src={product.image} alt="hero" width={380} height={400} className="flex flex-shrink-0" />
                                    {/* </span> */}
                                    {/* </CardContent> */}
                                    {/* </Card> */}
                                    <p className="leading-7 mt-2 font-extrabold">{product.name}</p>
                                    <p className="leading-7 mt-2 font-extrabold">{product.price}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>



            {/* ============================================================================================= */}

            <div className='flex justify-end mt-24 pb-8'>

                <h1 className=" basis-1/2 font-bold text-[2.75rem] leading-[55px] tracking-[0.03em] text-[#212121] w-[45%] ;
">
                    Unique and Authentic Vintage Designer Jewellery
                </h1>

            </div>
        </div>
    )
}

export default ProductSec