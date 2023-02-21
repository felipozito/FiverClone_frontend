import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
      const [active, setActive] = useState(false);
      const [open, setOpen] = useState(false);
      const { pathname } = useLocation();
      const isActive = () => {
            window.scrollY ? setActive(true) : setActive(false);
      };
      const currentUser = {
            id: 1,
            username: "Felipe Asimbaya",
            isSeller: "true",
      };

      useEffect(() => {
            window.addEventListener("scroll", isActive);
            return () => {
                  window.removeEventListener("scroll", isActive);
            };
      }, []);

      return (
            <div className={active || pathname !== "/" ? "navbar active" : "navbar "}>
                  <div className="container">
                        <div className="logo">
                              <Link to="/" className="link">
                                    <span className="text">Fiverr</span>
                                    <span className="dot">.</span>
                              </Link>
                        </div>
                        <div className="links">
                              <span>Fiverr Business</span>
                              <span>Explore</span>
                              <span>English</span>
                              <span>Sign In</span>
                              {!currentUser?.isSeller && <span>Become a Seller</span>}
                              {!currentUser && <button>Join</button>}
                              {
                                    <div className="user" onClick={() => setOpen(!open)}>
                                          <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                                          <span>{currentUser?.username}</span>
                                          {open && (
                                                <div className="options">
                                                      {currentUser?.isSeller && (
                                                            <>
                                                                  <Link to="gigs" className="link">
                                                                        Gigs
                                                                  </Link>
                                                                  <Link to="add" className="link">
                                                                        Add new Gig
                                                                  </Link>
                                                            </>
                                                      )}
                                                      <Link to="orders" className="link">
                                                            Orders
                                                      </Link>
                                                      <Link to="messages" className="link">
                                                            Messages
                                                      </Link>
                                                      <Link className="link">Logout</Link>
                                                </div>
                                          )}
                                    </div>
                              }
                        </div>
                  </div>
                  {active ||
                        (pathname !== "/" && (
                              <>
                                    <hr />
                                    <div className="menu">
                                          <Link to="/" className="link">
                                                Graphics & Desing
                                          </Link>
                                          <Link to="/" className="link">
                                                Video & Animation
                                          </Link>
                                          <Link to="/" className="link">
                                                Writing & Translation
                                          </Link>
                                          <Link to="/" className="link">
                                                Art & Translation
                                          </Link>
                                          <Link to="/" className="link">
                                                AI Services
                                          </Link>
                                          <Link to="/" className="link">
                                                Digital Marketing
                                          </Link>
                                          <Link to="/" className="link">
                                                Music & Audio
                                          </Link>
                                          <Link to="/" className="link">
                                                Programming & Tech
                                          </Link>
                                          <Link to="/" className="link">
                                                Business{" "}
                                          </Link>
                                          <Link to="/" className="link">
                                                Lifestyle
                                          </Link>
                                    </div>
                              </>
                        ))}
            </div>
      );
};

export default Navbar;
