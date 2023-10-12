import React from "react"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  return (
    <>
      <header className='header'>

      <div className='WebsiteNameAlignment'>
            <h1 className="websiteTextColor">NEWS WEBSITE</h1>
      </div>

        {/* <div className='scontainer flex'>    */}
        <div className='navbarAlignment'>   
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
          {/* <div className='account flexCenter'>
            <User />
          </div> */}
      </header>
    </>
  )
}
