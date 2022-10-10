import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Topics</Link>
            <Link to='/statics'>Statics</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;