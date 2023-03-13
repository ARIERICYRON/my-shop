import React from 'react'
import banner from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div className="bg-red-100 pt-8 my-10 grid grid-cols-1 gap-20 md:grid-cols-2 w-4/5 mx-auto items-center px-8 rounded-lg">
    <div className="flex flex-col gap-2 mr-2">
      <hi className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Cook, Save and Share </hi>
      <p className="md:text-base lg:text-lg pt-4">
        Taste Bite is a unique recipe sharing and discovery platform, where
        users can Save their favorite recipes in the app, create new ones and
        share them with friends.
      </p>
        <button className="inline-block md:text-base lg:text-lg shadow-md bg-secondary-color py-2 mt-6 mb-4 md:mb-4  rounded-full w-56 ">
          Browse Products
        </button>
    </div>

    <div className="object-cover ">
      <img src={banner} alt=""></img>
    </div>
  </div>
  )
}
