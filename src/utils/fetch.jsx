import { useEffect, useState } from 'react'

function FetchList(api) {
    const [list, setList] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            let data = await fetch(api)
            let json = await data.json()
            setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log(error.messa);
        }
    }
    return list
}

export default FetchList
