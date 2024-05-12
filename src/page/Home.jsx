import '../App.css'
import ResCard from '../component/Card';
import Carousel from '../component/Carousel';

export default function Home() {
  return (
    <div className='full'>
      <Carousel />
      <ResCard />
    </div>
  );
}