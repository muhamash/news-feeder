/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function NewsItems ( { title, text, time, imageSource, author, } )
{
    const formattedTime = new Date( time ).toLocaleString( 'en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true 
    } );

    return (
        <div className='flex flex-col-reverse md:flex-row gap-5 px-2'>
            {/* info */ }
            <div className="w-full">
                <a href="#"
                ><h3
                    className="mb-2.5 text-xl font-bold lg:text-[28px] w-full"
                >
                        { title }
                    </h3></a>
                <p className="text-base text-[#5C5955]">
                    { text }
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                    { formattedTime }
                </p>
            </div>
            {/* thumb */ }
            <div className="">
                { imageSource && (
                    <img
                        className="w-[85%] mx-auto cursor-pointer hover:scale-110 duration-150 ease-in-out"
                        src={ imageSource }
                        alt="img?"
                    />)
                }
                <p className="mt-5 text-base text-green-600">
                    { author }
                </p>
            </div>
        </div>
    );
}