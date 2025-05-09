import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import blog from "../data/blogs.json"
import author from "../data/authors.json"
import { Link } from 'react-router-dom';
import post1 from "../assets/react-router.jpg"

const Home = () => {
  // const { blogs, authors, status } = useSelector((state) => state.blog);
  console.log(blog);

  // if (status !== 'succeeded') {
  //   return <p className="text-center mt-10 text-gray-500">Loading blogs...</p>;
  // }

  // // Combine blog and author info
  // const blogsWithAuthor = blog.map((blog) => {
  //   const authors = author.find((a) => a.id === blog.authorId);
  //   return { ...blog, authors };
  // });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid gap-2 md:grid-row-2 lg:grid-row-3 ">

        <div className='max-w-3xl '>
          <Link
            to="#"
            className="w-[600px] h-[400px] bg-white p-6 rounded shadow hover:shadow-md flex flex-col justify-center items-center text-center"
          >
            <img
              src={post1}
              alt="title"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Mastering React Router</h2>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
              React Router is a powerful library for routing in React applications...
            </p>
            {author && (
              <p className="text-sm text-gray-500">
                By{' '}
                <Link to="#" className="text-blue-600 hover:underline">
                  Aditya
                </Link>
              </p>
            )}
          </Link>

        </div>

        <Link to="#" className="block bg-white p-4 rounded shadow hover:shadow-md">
          <img src={post1} alt="title" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-lg font-bold mb-2">Mastering React Router</h2>
          <p className="text-gray-600 text-sm line-clamp-2">"React Router is a powerful library for routing in React applications..."</p>
          {author && (
            <p className="mt-2 text-sm text-gray-500">
              By <Link to="#"
                className="text-blue-600 hover:underline">Aditya</Link>
            </p>
          )}
        </Link>

        <Link to="#" className="block bg-white p-4 rounded shadow hover:shadow-md">
          <img src={post1} alt="title" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-lg font-bold mb-2">Mastering React Router</h2>
          <p className="text-gray-600 text-sm line-clamp-2">"React Router is a powerful library for routing in React applications..."</p>
          {author && (
            <p className="mt-2 text-sm text-gray-500">
              By <Link to="#"
                className="text-blue-600 hover:underline">Aditya</Link>
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Home;
