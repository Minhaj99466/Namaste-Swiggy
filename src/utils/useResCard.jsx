import React from 'react'
import { LuVegan } from "react-icons/lu";
const useResCard = (ResCard) => {
    return (props) => {
        return (
            <div >
            <LuVegan className='absolute m-3 '/>
            <ResCard {...props} />
            </div>
        )
    }
}

export default useResCard
