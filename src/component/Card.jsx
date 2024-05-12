import '../App.css';
import Shimmer from './Shimmer';
import { IMG_PATH, SWIGGY_API } from '../utils/constants'
import FetchList from '../utils/fetch';
import { Link } from 'react-router-dom';

function ResCard() {
    const list = FetchList(SWIGGY_API)

    if (list == null) return <Shimmer />

    return (
        <div className="res-card">
            <h2>Restaurants with online food delivery in Guntur</h2>
            <h1>Search</h1>
            <div className='card-all'>
                {list && list.map((res, index) => (
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={"/restaurant/" + res.info.id} key={index} >
                        <div className='cards'>
                            <div className='card'>
                                <img className='img' src={IMG_PATH + res.info.cloudinaryImageId} alt="" />
                                <h4>{res.info.veg ? "veg" : "non"}</h4>
                                <h5>{res.info.name}</h5>
                                <h4>{res.info.cuisines.join(',')}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default ResCard;
