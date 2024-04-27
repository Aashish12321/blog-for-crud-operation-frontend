import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import CreatePost from './component/CreatePost';
import BlogPostList from './component/BlogPostList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/BlogPostList" element={<BlogPostList />} />
          <Route path="/CreatePost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
