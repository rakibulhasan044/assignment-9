import Banner from "../components/Banner";
import NewLocation from "../components/NewLocation";
import Properties from "../components/Properties";


const Home = () => {
    return (
        <div>
            <div className="p-4 ">
                <Banner/>
                <Properties/>
                <NewLocation/>
            </div>
        </div>
    );
};

export default Home;