import React from "react";

const Features = () => {
      return (
            <div className="features">
                  <div className="container">
                        <div className="left">
                              <h1>
                                    Find the perfect <span>freenlances</span> services for your business
                              </h1>
                              <div className="search">
                                    <div className="searchInput">
                                          <img src="./search.png" alt="" />
                                          <input type="text" placeholder="Try building mobil app" />
                                    </div>
                                    <button>Search</button>
                              </div>
                              <div className="popular">
                                    <span>Popular:</span>
                                    <button>Web Design</button>
                                    <button>Wordpress</button>
                                    <button>Logo Design</button>
                                    <button>IA services</button>
                              </div>
                        </div>
                        <div className="right">
                              <img src="./man.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Features;
