import React from 'react';

function Header() {
     return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                         ZOMATO
                    </a>
                    <button
                         className="navbar-toggler"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#navbarNav"
                         aria-controls="navbarNav"
                         aria-expanded="false"
                         aria-label="Toggle navigation"
                    >
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                         <ul className="navbar-nav">
                              <li className="nav-item">
                                   <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/papers"
                                   >
                                        PAPERS
                                   </a>
                              </li>

                              <li className="nav-item">
                                   <a
                                        className="nav-link active"
                                        href="/createPaper"
                                   >
                                        CREATE PAPER
                                   </a>
                              </li>
                              <li className="nav-item">
                                   <a
                                        className="nav-link active"
                                        href="/addItem"
                                   >
                                        CREATE QUESTIONS
                                   </a>
                              </li>

                              <li className="nav-item">
                                   <a className="nav-link disabled" href="#">
                                        Disabled
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}

export default Header;
