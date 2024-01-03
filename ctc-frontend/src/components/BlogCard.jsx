import React from "react";
import { urlFor } from "../../sanity";

const BlogCard = ({ title, author, image, publishDate, description }) => {
  const sliceDescription = (desc) => {
    // Split the description into an array of words
    const words = desc.split(" ");

    // Check if the description is already 150 words or less
    if (words.length <= 30) {
      return desc;
    }

    // Slice the array to include only the first 150 words
    const slicedWords = words.slice(0, 30);

    // Join the sliced words back into a string
    const slicedDescription = slicedWords.join(" ");

    // Add three dots at the end
    return slicedDescription + "...";
  };

  const finalDescription = sliceDescription(description);
  return (
    <>
      <div class="flex relative w-[350px] blackieee  flex-col justify-center items-center rounded-[15px] overflow-hidden md:mx-5 mb-10">
        <img class="relative rounded-t-[15px]" src={urlFor(image).url()} />
        <div class="text-white p-5">
          <div class="text-2xl font-bold my-2">{title}</div>
          <div class="my-2">{finalDescription}</div>
          <div class="font-thin text-gray-400">
            By {author} {publishDate}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
