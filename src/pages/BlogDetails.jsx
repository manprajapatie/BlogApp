import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, authors } = useSelector((state) => state.blog);
  const blog = blogs.find((b) => b.id === id);
  const author = authors.find((a) => a.id === blog.authorId);
  const related = blogs.filter((b) => b.authorId === blog.authorId && b.id !== blog.id);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">By <Link to={`/author/${author.id}`} className="text-blue-600 underline">{author.name}</Link></p>
      <img src={blog.image} alt={blog.title} className="rounded-lg mb-6" />
      <p className="mb-6">{blog.content}</p>

      <h2 className="text-2xl font-semibold mb-4">More from {author.name}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {related.map((b) => (
          <Link key={b.id} to={`/blog/${b.id}`} className="p-4 bg-white rounded shadow hover:shadow-md">
            <h3 className="text-lg font-medium">{b.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
