import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <logo>
            <img
              
              src="https://res.cloudinary.com/ddbztj1tk/image/upload/v1673461205/Amy%20Blog/AM-Blogo-removebg-preview_c3l9m4.png"
              alt="Logo"
              className="md:h-56 object-cover rounded-xl mx-auto mt-10  hover:shadow-slate-600 hover:shadow-sm"
            ></img>
          </logo>
        </Link>
      </nav>
    </>
  );
}
