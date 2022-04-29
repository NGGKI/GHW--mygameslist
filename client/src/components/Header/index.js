import React from 'react'
import './header.css'

function Header() {
  return (
    <body>
      <div class="container">
        <div class="header">
          <div class="title">
            <h1>MyGamesList</h1>
          </div>
          <div class="userAccess">
            <div class="login">Login</div>
            <div class="sign-up">Sign Up</div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Header;