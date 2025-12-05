import React from "react";

const BlogCard = ({ title, excerpt, image, author, date, tags, readingTime, category }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">{category}</span>
        <span className="text-xs text-gray-400">{readingTime}</span>
      </div>
      <h2 className="text-lg font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-3">{excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">By {author}</span>
          <span className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
