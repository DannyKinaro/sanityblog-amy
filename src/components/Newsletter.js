import React from "react";

export default function Newsletter() {
  return (
    <section className="shadow-xl py-20 bg-gradient-to-r from-red-200 to-pink-500">
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 md:gap-16 md:place-items-center">
        <article>
          <h2 className="text-black text-3xl lg:text-4xl mb-4">
            Sign Up to the Newsletter
          </h2>
          <p className="text-slate-500">
            Get updates when I post a new blog. No spam, unsubscribe anytime!
          </p>
        </article>

        <article>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
              className="w-80 py-2 px-4 rounded shadow mb-4 bg-transparent border-slate-300 placeholder-slate-500 text-slate-500 tracking-wide"
            />
            <button type="submit" className = "bg-black py-2 px-4 rounded text-slate-100 tracking-wide hover:opacity-75 transition-all duration-200 w-80 md:w-auto"> Subscribe</button>

            {/* Buttondown, Convertkit */}
          </form>
        </article>
      </div>
    </section>
  );
}
