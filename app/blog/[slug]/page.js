// BlogDetails.js
// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div className="blog-details-container">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      {/* Renderizar a imagem de capa */}
      {blog.cover_image && (
        <img src={blog.cover_image} alt={blog.title} className="w-full h-auto mb-6" />
      )}
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

export default BlogDetails;
