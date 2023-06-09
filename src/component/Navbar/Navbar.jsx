import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({users,logout}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-White ">
      <div className="container w-100">
        <Link className="navbar-brand text-white" to="">
          Moveis World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="">
                Home
              </Link>
            </li>
            {users ? 
              <>
              <li className="nav-item">
                <Link className="nav-link text-white" to="Movies">
                Movies
                </Link>
              </li>
              <li className="nav-item">
                <p className="nav-link text-white" style={{cursor:'pointer'}} onClick={()=>logout()}>Logout</p>
              </li>
            </> : <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="Login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="Register">
                    Register
                  </Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
