import '../App.css';

function Shimmer() {
    const curousel = Array.from({ length: 10 }, (_, index) => (
        <div key={index}>
            <div className='h-48 w-48 bg-gray-200 rounded-xl '></div>
        </div>
    ));
    const shimmerCards = Array.from({ length: 10 }, (_, index) => (
        <div className='shim-cards' key={index}>
            <div className='shim-card'></div>
        </div>
    ));
    return (

        <div className='full'>
            <div className='carousel'>
                <h3>What's on your mind ?</h3>
                <div className="carousel-items">
                    {curousel}
                </div>
                <div style={{ marginTop: '40px' }}>
                    <hr />

                </div>
            </div>
            <div className="res-card">
                <h2>Restaurants with online food delivery in Guntur</h2>
                <h1>Search</h1>
                <div className='card-all'>
                    {shimmerCards}
                </div>
            </div>
        </div>

    );

}


export default Shimmer;
