// src/pages/BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import WhatsAppFloat from "../components/WhatsAppFloat";
import SEO from "../components/SEO";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-5">Blog not found</h2>;
  }

  return (
    <div className="container my-5">
      {/* ✅ SEO for the blog post */}
     <SEO
  title={`${blog.title} - Marriage & Divorce in Nepal`}
  description={`${blog.excerpt} Read more about marriage registration, divorce procedures, and legal advice in Nepal.`}
  image={blog.image} // featured image for social sharing
  url={`https://marriagedivorcenepal.com/blog/${blog.id}`} // full URL of the blog
/>


      {/* WhatsApp floating button */}
      <WhatsAppFloat />

      {/* Back to Blog */}
      <Link to="/blog" className="btn btn-outline-secondary mb-3">
        ← Back to Blog
      </Link>

      {/* Blog content */}
      <div className="card shadow-lg p-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid rounded mb-3"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <h2>{blog.title}</h2>
        <p className="text-muted">
          By <b>{blog.author}</b> | {blog.date}
        </p>
        <hr />
        <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>
      </div>
    </div>
  );
}
