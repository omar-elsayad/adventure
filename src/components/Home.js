import landingBackground from '../images/landingBackground.png';
import '../css/home.css';


const Home = () => {
    return (
        <div className="home">
            <div className="landing w-100">
                <img className='w-100' src={landingBackground} alt="" />
                <div className='landing-text d-flex flex-column align-items-center'>
                    <h1 className='text-center'>Your Journey Starts Here...</h1>
                    <p className='text-center'>The Travel Companies That Will Change The Way You See The World</p>
                </div>
            </div>
        </div>
    );  
}   
 
export default Home;