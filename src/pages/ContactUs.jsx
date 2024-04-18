import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import PageTitle from "./PageTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactUs = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div className="py-10 space-y-5 min-h-[calc(100vh-116px)]" data-aos="fade-left">
            <PageTitle title={"Contact Us"}/>
            <h2 className="text-3xl font-semibold text-center">Find your nearest office</h2>
            <p className="max-w-[700px] text-center mx-auto text-gray-500 font-medium">Over 40,000 people work for us in more than 70 countries all over the world. Trusted relationships are at the heart of our business. We listen to your needs and aspirations to create bespoke solutions that bring your vision to life.</p>
            <h2 className="text-2xl font-semibold text-center">Find your local office</h2>
            <ul className="flex gap-4 justify-center text-red-600 font-semibold">
                <li>Dubai</li>
                <li>Singapore</li>
                <li>California</li>
                <li>Florida</li>
            </ul>
            <div className="flex gap-10 justify-center">
                <div><FaPhoneAlt className="inline mr-1" /> +0088005</div>
                <div><IoMdMail className="inline mr-1" /> newhome@gmail.com</div>
            </div>
        </div>
    );
};

export default ContactUs;