import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    document.title = "Page Not Found";
  },[])
  return (
    <>  
    
    <div className="">
    <img
          src="https://res.cloudinary.com/ddbztj1tk/image/upload/v1673462547/Amy%20Blog/image-removebg-preview_12_tzcxlg.png"
          alt=""
          className="md:h-56 object-cover rounded-xl mx-auto mt-60"
        ></img>
    </div>
      <section className="flex items-center justify-center text-center px-5 my-10">
        
        <article>
          <h1 className=" text-slate-700 text-xl lg:text-5xl mb-8 mx-auto dark:text-slate-300">
            Oops! Looks like you found a page we that doesn't exist
          </h1>
          <p className="text-slate-600 mb-8 mx-auto  dark:text-slate-300">
            This page either doesn't exist on the website or has been moved
          </p>

          <Link to="/" className="underline text-slate-400">
            Back to Homepage
          </Link>
        </article>
      </section>
    </>
  );
}
