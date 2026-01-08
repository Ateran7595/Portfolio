import { Button } from '../components/ui/button'
import { SheetClose } from '../components/ui/sheet'
import React from 'react'

function SheetCloseBtn({ idref, btnName }) {
  return (
    <SheetClose asChild className='flex justify-start items-start m-auto mt-4'>
        <a href={`#${idref}`}><Button className='font-roboto font-semibold bg-gradient-to-br from-[#2b5876] to-[#4e4376] text-white hover:from-[#244b63] hover:to-[#3f3863] transition-all duration-300'>{btnName}</Button></a>
    </SheetClose>
  )
}

export default SheetCloseBtn