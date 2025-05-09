import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { id, title, content, image, author } = blog;

  return (
    <></>
    // <Link to={`/blog/${id}`} className="block bg-white p-4 rounded shadow hover:shadow-md">
    //   <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
    //   <h2 className="text-lg font-bold mb-2">{title}</h2>
    //   <p className="text-gray-600 text-sm line-clamp-2">{content}</p>
    //   {author && (
    //     <p className="mt-2 text-sm text-gray-500">
    //       By <Link to={`/author/${author.id}`} className="text-blue-600 hover:underline">{author.name}</Link>
    //     </p>
    //   )}
    // </Link>
  );
};


export default BlogCard;
