import RandomUserCard from '../assets/components/effects/EffectOne';
import WeatherUpdate from '../assets/components/effects/EffectTwo';


const Home = () => {
    return (<>
        <h1 className="text-2xl p-4">Welcome to the Home Page</h1>
        <WeatherUpdate />
        <RandomUserCard />
    </>);
};

export default Home;
