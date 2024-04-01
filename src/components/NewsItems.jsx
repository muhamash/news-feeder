/* eslint-disable no-unused-vars */
import React from 'react';

export default function NewsItems ( { title, text, time, imageSource, author, } )
{
    const formattedTime = new Date(time).toLocaleString('en-US', {
  timeZone: 'Asia/Dhaka',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true // Use true for 12-hour format or false for 24-hour format
});



    return (
        <div className='col-span-12 grid grid-cols-12 gap-4'>
            {/* info */ }
            <div className="col-span-12 lg:col-span-4">
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
            <div className="col-span-12 lg:col-span-8">
                <img
                    className="w-full"
                    src={ imageSource }
                    alt="thumb"
                />
                <p className="mt-5 text-base text-[#5C5955]">
                    { author }
                </p>
            </div>
        </div>
    );
}