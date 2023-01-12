import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className="max-w-2xl my-20 mx-auto 2xl,xl,lg:grid grid-cols-1 s:mx-5 md:gap-8 bg-gradient-to-r from-red-200 to-pink-500 md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden dark:bg-slate-300">
        <article className="md:gap-8">
          <span className="px-10 py-10 flex flex-col items-center">
            <h3 className="text-2xl mb-4 flex dark:text-slate-900">Amy Mumbi</h3>
            <p className="dark:text-slate-900">
              Is a student at law, human rights enthusiast and advocate based in
              Nairobi Kenya.
            </p>
          </span>

          <ul className="flex items-center justify-center gap-12 mt-8 mb-8  text-slate-600">
            <li>
              <Link to="https://facebook.com/">
                <GrFacebook className="text-2x" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/">
                <FaTwitter className="text-2x" />
              </Link>
            </li>
            <li>
              <Link to="https://instagram.com/your_girl_aimie">
                <FaInstagram className="text-2x" />
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
