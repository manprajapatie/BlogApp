
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BlogDetails from '../pages/BlogDetails';
import AuthorDetails from '../pages/AuthorDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/author/:id" element={<AuthorDetails />} />
    </Routes>
  );
}
