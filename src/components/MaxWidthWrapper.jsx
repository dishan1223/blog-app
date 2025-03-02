"use client"
import React from 'react'

const MaxWidthWrapper = ({children}) => {
  return (
    <div className='mx-auto w-[90%] md:w-[736px] mt-10'>
        {children}
    </div>
  )
}

export default MaxWidthWrapper