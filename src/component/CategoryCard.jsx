import React from 'react'
import RecomendedItem from './RecomendedItem';


function CategoryCard(cardItems) {
    return  (
        
                <div className="border p-4 rounded-lg shadow-lg   w-[550px] my-5">
                    <div className="flex justify-between items-center ">
                        <span className="text-lg font-semibold text-black-600">
                           {cardItems.cardItems.title}
                        </span>
                        <span className="text-lg font-semibold text-black-600">
                           ⬇️
                        </span>
                    </div>

                <RecomendedItem items={cardItems.cardItems.itemCards}/>

                </div>
    );
};
export default CategoryCard;
