import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
        <a href="/add-post" className='button' ><span>Add new post</span></a>
    </header>
  );
};

export default Toolbar;