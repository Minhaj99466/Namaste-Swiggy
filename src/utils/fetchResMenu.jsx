import { useEffect, useState } from 'react'
import { MENU_API } from './constants'

function FetchResMenu(resId) {
    const [resInfo, setResInfo] = useState(null)
    
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resId)
            const json = await data.json()
            setResInfo(json.data)
            console.log(json);
        } catch (error) {
            console.log(error.message);
        }
    }
    return resInfo
}

export default FetchResMenu
