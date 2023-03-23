import React, { useEffect, useState } from "react";

import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    document.title = "Amy Mumbi's Blog | All Blogs";
  },[])
   
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage{
          asset -> {
            _id,
            url,
          },
          alt,
        },
        "name" : author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    <Navbar/>    
      <h1 className="p-5 text-xl flex items-center justify-center dark:text-slate-400 dark ">
        All Blog Posts
      </h1>

      {stories[0] && (
        <Link to={`/blog/${stories[0].slug.current}`}>
          <section></section>
        </Link>
      )}

      <section className="  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-5 ">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className="hover:bg-slate-200 border-slate-800 rounded-lg overflow-hidden dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-500">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="md:h-64 w-full object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-sm">
                  By {story.name} &middot;{" "}
                  {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                <h2 className="text-xl mt-2 mb-1 dark:text-slate-200">{story.title}</h2>
                <p className="text-sm  leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}...`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <div>
        <Link
          to={"/"}
          className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end"
        >
          <button className="bg-slate-400 my-5 py-2 px-4 rounded text-slate-100 tracking-wide hover:bg-slate-600 transition-all duration-500 dark:bg-slate-700 ">
            Back to Home Page
          </button>
        </Link>
        <Profile />
        <Footer />
      </div>
    </>
  );
}
