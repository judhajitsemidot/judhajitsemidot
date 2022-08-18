import React from 'react'
import { HeaderWhite } from '../src/Components/Layouts/HeaderWhite'
export const HeaderLayout = ({children}) => {
  return (
    <>
    <HeaderWhite />
    {children}
    </>
  )
}
