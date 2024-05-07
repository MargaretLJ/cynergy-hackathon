/* eslint-disable react/no-unknown-property */

import { Container } from "reactstrap";
import "./Header.css";
import { useRef } from "react";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header">
      <Container>
        <div
          className="navigation d-flex align-items-center
        justify-content-between"
        >
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i class="ri-pantone-line"></i>learners
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav_item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i>+91 9606578010
              </p>
            </div>
          </div>
          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
