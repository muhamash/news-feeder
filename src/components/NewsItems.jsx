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
        <div className='flex  gap-8 px-2'>
            {/* info */ }
            <div className="w-1/2">
                <a href="#"
                ><h3
                    className="mb-2.5 text-2xl font-bold lg:text-[28px]"
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
            <div className="w-1/2">
                <img
                    className="w-full cursor-pointer hover:scale-110 duration-150 ease-in-out"
                    src={ imageSource }
                    alt="thumb"
                />
                <p className="mt-5 text-base text-green-600">
                    { author }
                </p>
            </div>
        </div>
    );
}