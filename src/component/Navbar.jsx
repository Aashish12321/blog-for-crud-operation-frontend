import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid"  >
        <NavLink className="navbar-brand" to="/">
          Blogger
        </NavLink>

        <ul className="navbar-nav ms-auto" >
            <li className="nav-item">
              <NavLink className="nav-link active"  to="/BlogPostList">
               Read Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/CreatePost">
                Create Posts
              </NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
