import '../App.css';
import { IMG_PATH } from '../utils/constants';

function ResCard(props) {
    const { resData } = props
    const { name, cloudinaryImageId, veg, cuisines } = resData?.info

    return (

     
            <div className='cards'>
                <div className='card'>
                    <img className='img' src={IMG_PATH + cloudinaryImageId} alt="" />
                    <h5 className='text-xl font-bold' >{name}</h5>
                    <h4>{cuisines.join(', ')}</h4>
                </div>
            </div>


    );
}
export default ResCard;
