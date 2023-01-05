import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
      <>
        <h1>404: Not Found, click on start</h1>
        <Link className="btn btn-primary" to="/">
                Start
        </Link>
      </>
    )
}

export default NotFound;
