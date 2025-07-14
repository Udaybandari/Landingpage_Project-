import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import clsx from 'clsx';

// ✅ Reusable NavLink
const NavLink = ({ title, to }) => (
  <LinkScroll
    to={to}
    spy
    smooth
    offset={-100}
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [state, setState] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Mobile logo */}
        <a href="/" className="lg:hidden flex-1 cursor-pointer z-10">
          <img src="images/xora.svg" width={155} height={55} alt="logo" />
        </a>

        {/* Navigation menu */}
        <div
          className={clsx(
            'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 transition-opacity duration-500',
            state
              ? 'max-lg:opacity-100'
              : 'max-lg:opacity-0 max-lg:pointer-events-none'
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-10 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" to="features" />
                  <div className="dot" />
                  <NavLink title="pricing" to="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform cursor-pointer"
                  >
                    <img
                      src="images/xora.svg"
                      width={155}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" to="faq" />
                  <div className="dot" />
                  <NavLink title="download" to="download" />
                </li>
              </ul>
            </nav>

            {/* Decorative outlines */}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                className="relative z-10"
                alt="outline"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
                alt="outline fill"
              />
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setState(!state)}
          className="z-10 size-10 border-2 border-s4/25 lg:hidden flex justify-center items-center cursor-pointer rounded-full"
        >
          <img
            src={state ? 'images/close.svg' : 'images/magic.svg'}
            className="size-1230 max-lg:h-auto"
            alt="menu toggle"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
