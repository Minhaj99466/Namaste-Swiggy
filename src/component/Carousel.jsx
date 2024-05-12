
const data = [
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg",
    "https://i.pinimg.com/564x/ca/bf/cc/cabfcc101fa6f6d99b3c07e9997f7c47.jpg"
];

function Carousel() {
    return (
        <div className='carousel'>
            <h3>What's on your mind ?</h3>
            <div className="carousel-items">
                {data.map((i, index) => (
                    <img key={index} src={i} alt="hello" />
                ))}
            </div>
            <div style={{marginTop:'40px'}}> 
                <hr />

            </div>
        </div>
    )
}

export default Carousel
