import React from 'react'

function DropdownShimmer() {

    return (

        <div className="full flex relative flex-col items-center">
            <div className=" rounded-2xl p-3 w-1/2  m-5">
                <h1 className="text-3xl font-bold text-black-700 m-6">Restaruant</h1>
                <div className="flex justify-between items-center border p-4 h-24 rounded-lg shadow-md">
                </div>
            </div>
        <h2 className=" flex text-4xl font-serif font-bold items-center underline pl-2 m-5">Menu</h2>
        </div>
     
    )
}

export default DropdownShimmer
