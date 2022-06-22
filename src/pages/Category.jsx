import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1>Category</h1>

      <ul>
        <li>
          <Link to="/category/beef">Beef</Link>
        </li>
        <li>
          <Link to="/category/seafood">Seafood</Link>
        </li>
        <li>
          <Link to="/category/chicken">Chicken</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;