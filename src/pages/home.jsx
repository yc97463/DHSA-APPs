import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello, World</h1>
      <p>
        <Link to="/card">open Card</Link>
      </p>
    </div>
  );
}

export default Home;
