import Link from 'next/link';
import React from 'react';

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={ linkStyle }>Home</a>
      </Link>

      <Link href="/about">
        <a style={ linkStyle }>About</a>
      </Link>

      <Link href="/contacts">
        <a style={ linkStyle }>Contacts</a>
      </Link>
    </div>
  )
};

export default Header;
