import React from "react";

export default function SearchResults({ results }) {
  return (
    <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-md p-4 max-w-[300px] z-10">
      <ul>
        {results.map((result, index) => (
            <React.Fragment key={index}>
                <li >{result.title}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}