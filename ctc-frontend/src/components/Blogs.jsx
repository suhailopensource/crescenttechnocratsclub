import React, { useEffect, useState } from "react";
import "../../src/blogs.css";
import BlogCard from "./BlogCard";
import { getBlogs } from "../../api";

// NOTE:=-   THE BLOGS ARE WILL BE ARRANGED IN LATEST TO OLDEst BY DEFAULT ACCORDING TO THE DATE PROVIDED by admin

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBlogs().then((data) => {
          setBlogs(data);
          // console.log(hod[0].name);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section class="relative bg-black w-screen h-[400px] flex justify-center items-center">
        <img
          class="absolute right_image left-0 w-[37rem]"
          src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931009/circuit-board-pattern-technology-white-background-oikjhgvector-36687060_vuepqj.png"
        />

        <divc class="text-center text-5xl font-bold bluish">
          <div class="text-white">WELCOME !</div>
          <div class="text-white">TO OUR BLOG PAGE</div>
        </divc>
        <img
          class="absolute left_image right-0 w-[32rem]"
          src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931011/Untitled-removebg-preview_lsk0zk.png"
        />
      </section>

      <section class="blog_page w-screen py-10">
        <div class="flex w-screen justify-center flex-wrap">
          {blogs?.map((i, idx) => (
            <BlogCard
              key={idx}
              title={blogs[idx]?.title}
              author={blogs[idx]?.author}
              description={blogs[idx]?.description}
              image={blogs[idx]?.image}
              publishDate={blogs[idx]?.date}
            />
          ))}
          {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
        </div>
      </section>
    </>
  );
};

export default Blogs;
