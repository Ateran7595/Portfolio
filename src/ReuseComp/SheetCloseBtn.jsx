import { Button } from '../components/ui/button'
import { SheetClose } from '../components/ui/sheet'
import React from 'react'

function SheetCloseBtn({ idref, btnName }) {
  return (
    <SheetClose asChild className='flex justify-start items-start m-auto mt-4'>
        <a href={`#${idref}`}><Button className='bg-[#ff8558] hover:bg-[#ffa381]'>{btnName}</Button></a>
    </SheetClose>
  )
}

export default SheetCloseBtn