import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Homepage() {
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    document.title = "Amy Mumbi's Blog";
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
        setStories(data.slice(0, 6));
      })
      .catch(console.error);
  }, []);

  return (
    <>
    <Navbar/>
    <h2 className="text-3xl mt-2 dark:text-slate-200 mx-auto flex items-center justify-center md:text-xl sm:text-xl">Featured</h2>

    <section className="border-t-4 dark:border-slate-700 max-w-4xl mx-auto mt-10"></section>

      {!stories ? (<h2>Loading...</h2>):(<>
        {stories[0] && (
        <Link to={`/blog/${stories[0].slug.current}`}>
          <section className="max-w-7xl mx-auto my-20 px-5 ">
            <article className="relative">
              {stories[0].mainImage && (
                <img
                  src={stories[0].mainImage.asset.url}
                  alt={stories[0].mainImage.alt}
                  className="h-64 w-full object-cover rounded-2xl hover:shadow-slate-600 hover:shadow-lg"
                />
              )}
              <section className="border-t-4 dark:border-slate-700 max-w-4xl mx-auto mt-10"></section>

              <div className="absolute bottom-8 left-8 md:w-1/2">
                <h1 className="text-xl lg:text-5xl mb-6 text-white uppercase">
                  {stories[0].title}
                </h1>
                <p className="text-white mx-3">{`${stories[0].body[0].children[0].text.substring(
                  0,
                  200
                )}...`}</p>

                <Link to={`/blog/${stories[0].slug.current}`}>
                  <button className="bg-slate-0 border-2 bg-transparent border-slate-700  my-5 py-2 px-4 rounded text-slate-700 tracking-wide hover:bg-slate-700  hover:text-slate-100 transition-all duration-200">
                    Read More
                  </button>
                </Link>
              </div>
            </article>
          </section>
        </Link>
      )}
      </>)}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-5">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className="border-slate-700 rounded-lg overflow-hidden hover:bg-slate-300 hover:dark:bg-slate-700 transition-all duration-500">
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
                <h2 className="text-xl mt-2 mb-1 dark:text-slate-300">{story.title}</h2>
                <p className="text-sm  leading-relaxed">
                  {`${story.body[0].children[0].text.substring(0, 200)}...`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
      <Link
        to={"/blog"}
        className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end"
      >
        <button className="bg-slate-700 my-5 py-2 px-4 rounded text-slate-100 tracking-wide hover:bg-slate-800 transition-all duration-200">
          Read More Blog Posts
        </button>
      </Link>
      <Profile />
      <Footer />
    </>
  );
}
