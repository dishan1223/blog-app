"use client"
import React from 'react'

const MaxWidthWrapper = ({children}) => {
  return (
    <div className='mx-auto w-3/4'>
        {children}
    </div>
  )
}

export default MaxWidthWrapper