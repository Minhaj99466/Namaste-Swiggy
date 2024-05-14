import React from 'react'
import { useParams } from 'react-router-dom'
import FetchResMenu from '../utils/fetchResMenu'
import DropdownShimmer from './DropdownShimmer'
import { IoMdStar } from "react-icons/io";
import CategoryCard from './CategoryCard';

function RestaurantView() {
    const { resId } = useParams()

    const resInfo = FetchResMenu(resId)

    const { name, cuisines, costForTwoMessage, sla, avgRating, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info || {};

    const categories =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return resInfo === null ? (
        <DropdownShimmer />
    ) : (
        <div className="full flex relative flex-col items-center">
            <div className=" rounded-2xl p-3 w-1/2  m-5">
                <h1 className="text-3xl font-bold text-black-700 m-6">{name}</h1>
                <div className="flex justify-between items-center border p-4 rounded-lg shadow-md">
                    <div className="left">
                        <h3 className="text-lg font-semibold flex items-center text-black-600 mt-2">
                            <IoMdStar repeatCount={4} className="text-green-500" />
                            <span className="text-lg font-semibold text-black ml-1">
                                {avgRating} Rating({totalRatingsString})
                            </span>
                        </h3>
                        <h3 className="text-sm text-orange-500 underline mt-1">
                            {cuisines.join(", ")}
                        </h3>
                    </div>
                    <div className="right">
                        <h3 className="text-lg font-semibold text-black-600">
                            {costForTwoMessage}
                        </h3>
                        <h4 className="text-sm text-gray-500 mt-1">z
                            {sla.deliveryTime} minutes
                        </h4>
                    </div>
                </div>
            </div>
            <h2 className=" flex text-4xl font-serif font-bold items-center underline pl-2 m-5">Menu</h2>
            <div>
                {categories.map((category,index)=>(
                    <CategoryCard key={index} cardItems={category?.card?.card}/>
                ))}
            </div>
        </div>
    );
};
export default RestaurantView;
