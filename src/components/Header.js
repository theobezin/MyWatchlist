import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content'>
                <div className='brand'>
                    <Link to='/'></Link>
                </div>
            </div>
        </div>
            
    </header>
  )
}
