"use client"
import React from 'react'

const MaxWidthWrapper = ({children}) => {
  return (
    <div className='mx-auto w-[736px]'>
        {children}
    </div>
  )
}

export default MaxWidthWrapper