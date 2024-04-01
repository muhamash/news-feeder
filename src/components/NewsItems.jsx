/* eslint-disable no-unused-vars */
import React from 'react';

export default function NewsItems({title, text, time, imageSource, author,}) {
    return (
        <div className='col-span-12 grid grid-cols-12 gap-4'>
            {/* info */}
            <div className="col-span-12 lg:col-span-4">
                <a href="#"
                ><h3
                    className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                >
                        {title}
                    </h3></a>
                <p className="text-base text-[#5C5955]">
                    {text}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">
                    {time}
                </p>
            </div>
            {/* thumb */}
            <div className="col-span-12 lg:col-span-8">
                <img
                    className="w-full"
                    src={imageSource}
                    alt="thumb"
                />
                <p className="mt-5 text-base text-[#5C5955]">
                    {author}
                </p>
            </div>
        </div>
    );
}