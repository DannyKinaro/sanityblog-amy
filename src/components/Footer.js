import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t dark:border-slate-500 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col dark:text-slate-200">
        <h3 className="text-l  dark:text-slate-200 ">Follow me on social media</h3>
        <ul className="text-sm mt-4 items-center justify-center flex-wrap gap-4 flex-cols-3">
          <li><a href="https://facebook.com/">Facebook</a></li>
          <li><a href="https://instagram.com/your_girl_aimie">Instagram</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li>
        </ul>
      </footer>
    </>
  );
}
