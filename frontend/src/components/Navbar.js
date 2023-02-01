import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
            
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                </div>
            
                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-light">
                        Logout
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
