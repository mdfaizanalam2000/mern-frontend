import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='box'>
            <div className="error">
                <h1 className='text-center'>404 Error- Page not found</h1>
                <p className='text-center'>The page you requested does not exist</p>
                <div className='text-center'>
                    <Link to="/" className='link'>Go to homepage</Link>
                </div>
            </div>
        </div>
    )
}
