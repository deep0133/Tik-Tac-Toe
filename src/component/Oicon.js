import React from 'react'

export default function Oicon({w,h}) {
  return (
    <div className={`circle ${w?w:'w-4'} ${h?h:'h-4'} border-4 border-[#f1b236] rounded-full`}></div>
  )
}
