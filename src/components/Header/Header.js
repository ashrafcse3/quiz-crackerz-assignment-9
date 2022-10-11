import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-purple-600 text-white flex justify-between px-8 py-4'>
            <Link to='/' className='text-4xl font-bold'>MCQ CHECKER</Link>
            <div>
                <Link to='/' className='mr-10 hover:bg-black'>Topics</Link>
                <Link to='/statics' className='mr-10 hover:bg-black'>Statics</Link>
                <Link to='/blogs' className='mr-10 hover:bg-black'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;