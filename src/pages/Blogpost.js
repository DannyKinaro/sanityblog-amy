import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Blogpost() {
  const [blogpost, setBlogpost] = useState([]);
  const { slug } = useParams();


  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
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
      } `
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title, slug]);

  return (
    <>
      {blogpost && (
        <section className="py-20 px-5 max-w-3xl mx-auto ">
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              className="h-2/3 object-cover rounded-lg shadow "
            ></img>
          )}
          <h1 className="text-4xl xl:text-6xl dark:text-slate-100 mt-5">{blogpost.title}</h1>

          <p className=" text-slate-900 text-sm mb-8 dark:text-slate-100 mt-5">
            By {blogpost.name}
            {""}{" "}
            {blogpost.publishedAt && (
              <>
              &middot;{" "}
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}

              </>
            )}
          </p>

          <div className="">
            <PortableText value={blogpost.body} />
          </div>
        </section>
      )}

      <Link
        to={"/blog"}
        className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end"
      >
        <button className="bg-slate-400 my-5 py-2 px-4 rounded tracking-wide hover:bg-slate-500 hover:text-slate-300 transition-all duration-200 dark:bg-slate-700 dark:text-slate-500">
          Read More Blog Posts
        </button>
      </Link>
      <ProfileCard/>
      <Footer />
    </>
  );
}
