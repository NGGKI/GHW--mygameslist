import React from 'react'
// import './nav.css'

function Nav() {
  return (
    <body>
      <div class="container">
        <div class="menu" id="menu">
          <div class="menu-left">
            <ul>
              <li class="dropdown">
                <a class="dropbtn">Games</a>
                <div class="dropdown-content">
                  <a href="#">Game Search</a>
                  <a href="#">Top Games</a>
                  <a href="#">Videos</a>
                  <a href="#">Reviews</a>
                  <a href="#">Recommendations</a>
                </div>
              </li>
              <li class="dropdown">
                <a class="dropbtn">Guides</a>
                <div class="dropdown-content">
                  <a href="#">Guide Search</a>
                  <a href="#">Top Guides</a>
                  <a href="#">Let's Plays</a>
                </div>
              </li>
              <li class="dropdown">
                <a class="dropbtn">Community</a>
                <div class="dropdown-content">
                  <a href="#">Forums</a>
                  <a href="#">Blogs</a>
                  <a href="#">Users</a>
                </div>
              </li>
              <li class="dropdown">
                <a class="dropbtn">Industry</a>
                <div class="dropdown-content">
                  <a href="#">News</a>
                  <a href="#">Featured Articles</a>
                  <a href="#">People</a>
                  <a href="#">Companies</a>
                </div>
              </li>
              <li class="dropdown">
                <a class="dropbtn">Help</a>
                <div class="dropdown-content">
                  <a href="#">About</a>
                  <a href="#">Support</a>
                  <a href="#">Advertising</a>
                  <a href="#">FAQ</a>
                  <a href="#">Report</a>
                  <a href="#">Staff</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Nav;