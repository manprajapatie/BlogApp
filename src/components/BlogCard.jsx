import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="block bg-white p-4 rounded shadow hover:shadow-md">
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded mb-4" />
      <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 line-clamp-2">{blog.content}</p>
    </Link>
  );
};

export default BlogCard;