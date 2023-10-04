import React, { useState } from 'react'
import WimberleyW from '../images/wimberley-wellness.svg'
import { Link } from 'gatsby'

// @TODO: Add Client Login Button here: https://wimberleywellness.clientsecure.me/

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex justify-center text-asparagus">
      <nav className=" w-full flex items-center justify-between px-6 font-bold md:px-5  lg:justify-center lg:gap-x-80 xl:gap-x-96">
        <Link to="/">
          <div className="flex">
            {/*  Logo  */}
            <div className="flex w-36 p-2 relative ">
              <img src={WimberleyW} theme="light" />
            </div>
          </div>
        </Link>
        <ul
          className={`${open ? 'animate-right fade' : ''}
          duration-700 animate-li 
          absolute z-30 top-0 left-full w-3/5
          pr-12 pt-24 text-right h-screen bg-slate-200 lg:bg-transparent
          flex flex-col space-y-6 font-alata md:p-4 md:h-10 md:bg-transparent md:w-min
          md:visible md:flex-row md:space-x-8 md:space-y-0 md:static md:mb-6`}
        >
          <li className="hover:text-teal-400">
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="hover:text-teal-400">
            <Link to="/about" activeClassName="active">
              About&nbsp;Us
            </Link>
          </li>
          <li className="hover:text-teal-400">
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </li>
          <li className="hover:text-teal-400">
            <Link to="/gallery" activeClassName="active">
              Gallery
            </Link>
          </li>
          <li className="hover:text-teal-400">
            <Link to="/association" activeClassName="active">
              Association
            </Link>
          </li>
          <li className="hover:text-teal-400">
            <Link to="/careers" activeClassName="active">
              Careers
            </Link>
          </li>
        </ul>

        {/*  Hamburger Button  */}
        <div className="md:hidden bg-pastelBrown p-1.5 rounded-sm md:p-0">
          <div
            onClick={() => setOpen(!open)}
            id="menu-btn"
            type="button"
            className={`${
              open ? 'open' : ''
            } z-40   align-middle px-4 py-2 hamburger md:hidden focus:outline-none focus:ring-blue-50`}
          >
            <div className="">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
