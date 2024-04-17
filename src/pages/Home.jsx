import Banner from "../components/Banner";
import NewLocation from "../components/NewLocation";
import Properties from "../components/Properties";
import PageTitle from "./PageTitle";

const Home = () => {
  return (
    <div className="p-4 ">
        <PageTitle title="Home"/>
      <Banner />
      <Properties />
      <NewLocation />
    </div>
  );
};

export default Home;
