import { useEffect } from "react";
import Banner from "../components/Banner";
import NewLocation from "../components/NewLocation";
import Properties from "../components/Properties";
import PageTitle from "./PageTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="p-4" data-aos="fade-left">
      <PageTitle title="Home" />
      <Banner />
      <Properties />
      <NewLocation />
    </div>
  );
};

export default Home;
