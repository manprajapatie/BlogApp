import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthorDetails = () => {
  const { id } = useParams();
  const { authors, blogs } = useSelector((state) => state.blog);
  const author = authors.find((a) => a.id === id);
  const authorBlogs = blogs.filter((b) => b.authorId === id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex gap-4 items-center mb-6">
        <img src={author.profilePic} alt={author.name} className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <p className="text-gray-600">{author.bio}</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Blogs by {author.name}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {authorBlogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="p-4 bg-white rounded shadow hover:shadow-md">
            <h3 className="text-lg font-medium">{blog.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorDetails;