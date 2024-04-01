import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      fetch("http://localhost:8000/v2/top-headlines?category=general")
        .then((result) => result.json())
        .then((data) => {
          setData(data.articles); // Assuming 'articles' is the array containing news items in the response
          console.log(data);
        })
        .catch((err) => {
          console.log("Error fetching data:", err);
        });
    } catch (error) {
      console.error("Error occurred during fetch:", error);
    }
  };

  return (
    <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
      {data.map((newsItem, index) => (
        <NewsItems
          key={index}
          title={newsItem.title}
          text={newsItem.description}
          time={newsItem.publishedAt}
          imageSource={newsItem.urlToImage}
          author={newsItem.author}
        />
      ))}
    </div>
  );
}