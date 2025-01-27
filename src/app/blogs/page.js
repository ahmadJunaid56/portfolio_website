import React from 'react';
import fs from 'fs';
import Image from "next/image";
import matter from 'gray-matter';
import Link from 'next/link';
import Navbar from '../components/Header'
import Contact from '../components/Contact'
import Copyright from '../components/Copyright'

function getBlogs() {
  const dirContent = fs.readdirSync('content', 'utf-8'); // Reads the 'content' directory
  return dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, 'utf-8'); // Reads each file
    const { data } = matter(fileContent); // Parses front matter
    return data; // Returns the metadata (title, date, etc.)
  });
}

export default function BlogPage() {
  const blogs = getBlogs();

  return (
    <>
      <Navbar />
      <div className="bg-black dark:bg-gray-900 text-center py-16">
        <h1 className="text-4xl font-bold text-white">My Latest Blogs</h1>
        <p className="text-xl text-white mt-4">
        Insights and updates from my portfolio and tech adventures.
        </p>
      </div>
      <div className="py-8 px-4 lg:py-16 lg:px-12">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  {blog.title}
                </h2>
                <p className="mb-4">{blog.description}</p>
                <div className="text-sm mb-4">
                  <span>By {blog.author}</span> |{' '}
                  <span>
                    {new Date(blog.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Copyright />
    </>
  );
}
