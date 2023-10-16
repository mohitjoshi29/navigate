import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    //     <div>
    //       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="#">Navbar</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div class="navbar-nav">
    //       <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
    //       <a class="nav-item nav-link" href="#">Features</a>
    //       <a class="nav-item nav-link" href="#">Pricing</a>
    //       <a class="nav-item nav-link disabled" href="#">Disabled</a>
    //     </div>
    //   </div>
    // </nav>
    //     </div>
    <>
      <div className='container-fluid'>
        <br /><br />
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/">Add User</Link>
                </li>
                <li class="nav-item">
                  <Link to="/User_Data">User Data</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6'>

          </div>
        </div>

      </div>
      {/* </div > */}
    </>
  )
}
