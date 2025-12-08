import React from 'react'

const Header = () => {
  const menuItems = [
    { text: "Login", link: "/login" },
    { text: "Register", link: "/register" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">SE NPRU Blog</a>
      </div>

      <div className="navbar-end">
        <ui className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
}

export default Header