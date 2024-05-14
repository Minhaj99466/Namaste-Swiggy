import React from 'react'
import { IMG_PATH } from '../utils/constants';

function RecomendedItem(itemCards) {
console.log(itemCards);
  return (
    <>
      {itemCards.items.map((items,index)=>(
        // <div className='flex'> 
        <div className='m-5 border-b-2 rounded-lg flex justify-between' key={index}>
          <div>
        <h1 className='font-bold'>{items.card?.info?.category}</h1>
        {items.card?.info?.price?<h1>₹{items.card?.info?.price}</h1>:<h1>₹1425</h1>}
        <h1 className='text-sm text-left'>{items.card?.info?.name}</h1> 
        </div>
        <div className='w-20 h-20 rounded-lg'>
        <img src={IMG_PATH+items.card?.info?.imageId}  alt="" />
        </div>
      </div>
        
      ))}
    </>
  )
}

export default RecomendedItem
