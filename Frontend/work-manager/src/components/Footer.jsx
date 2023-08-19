"use client"

import React from 'react'

const Footer = () => {
  return (
    <footer className='h-30 bg-blue-600 mt-5'>
        <div className='flex p-5 justify-around'>
            <div className='text-center flex flex-col justify-center'>
                <h1>Welcome to Work Manager</h1>
                <p>Lorem ipsum dolor sit,ccusantium fugiat! Sequi ducimus molestiae sit tempora suscipit consequatur eos maiores ab ipsam natus.</p>
            </div>
            <div>
                <h1>Important Links</h1>
                <ul className='text-center'> 
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">X</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer