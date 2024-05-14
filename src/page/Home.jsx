import { Link } from 'react-router-dom';
import '../App.css'
import ResCard from '../component/Card';
import Carousel from '../component/Carousel';
import Shimmer from '../component/Shimmer';
import { SWIGGY_API } from '../utils/constants';
import FetchList from '../utils/fetch';
import useResCard from '../utils/useResCard';

export default function Home() {
  const list = FetchList(SWIGGY_API)
  const VegLabelCard=useResCard(ResCard)

  if (list == null) return <Shimmer />

  return (
    <div className='full'>
      <Carousel />
      <h2>Restaurants with online food delivery in Guntur</h2>
      <div className='card-all'>
      
      {list.map((res, index) => (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={"/restaurant/" + res.info.id} key={index} >
          {!res.info.veg? <ResCard resData={res} />:<VegLabelCard resData={res}/>}
        </Link>
      ))}
    </div>
    </div>
  );
}