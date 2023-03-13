

import React from 'react'
import Logo from "../assets/Logo.png"

export default function Header() {
  return (
    <div className='flex w-11/12 mx-auto items-center justify-between'>
        <div className='pt-2 pl-'>
            <img src={Logo} width="50px" alt="logo"></img>
        </div>
        <div className='flex-6 hidden md:flex'>
            <ul className='flex gap-8 p-12 list-none font-base cursor-pointer mr-23'>
                <li>Products</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
  )
}
