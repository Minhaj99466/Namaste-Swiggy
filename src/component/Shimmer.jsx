

import '../App.css';

function Shimmer() {
    const shimmerCards = Array.from({ length: 10 }, (_, index) => (
        <div className='shim-cards' key={index}>
            <div className='shim-card'></div>
        </div>
    ));
    return (
        <div className="res-card">
            <h2>Restaurants with online food delivery in Guntur</h2>
            <h1>Search</h1>
            <div className='card-all'>
               {shimmerCards} 
            </div>
        </div>
    );

}


export default Shimmer;
