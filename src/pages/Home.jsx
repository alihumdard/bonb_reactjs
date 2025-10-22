import React from 'react'
import { FaLeaf, FaUser, FaUsers } from 'react-icons/fa';
import Footer from '../main/Footer';
import Sectionwraper from '../main/Sectionwraper';
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';

const Home = () => {
    const items = [
        { icon: <FaUser className="w-5 h-5 text-gray-700" />, text: 'Individual therapy' },
        { icon: <FaUsers className="w-5 h-5 text-gray-700" />, text: 'Group support sessions' },
        { icon: <FaLeaf className="w-5 h-5 text-gray-700" />, text: 'Personal growth' },
    ];
    return (
        <>
        <Sectionwraper>
            <Sectionwraper>
                <section className="py-16 md:pb-24 md:pt-40">
                    <div className="text-center">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl font-normal font-serif text-gray-900 leading-tight mb-6">
                            Healing hope for <br /> survivors in Ghana
                        </h1>

                        {/* Description */}
                        <p className="text-md text-gray-600 mb-10 font-lora max-w-xl mx-auto">
                            We stand with survivors of abuse and homelessness, offering a beacon
                            of light and support. Our mission is to transform lives through
                            compassionate care and empowerment.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-center space-x-4 mb-16">
                            <button className="bg-orange-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-700 transition-colors duration-300 text-lg">
                                Donate
                            </button>
                            <button className="bg-gray-100 cursor-pointer text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-300 text-lg">
                                Volunteer
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div className=" mx-auto rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/hero.png" // Placeholder image URL
                                alt="Three children from Ghana smiling"
                                className="w-full h-[700px] object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* section 2 */}
                <section className=" py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content Area */}
                        <div className="text-left max-w-lg md:max-w-none mx-auto md:mx-0">
                            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                Safety
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                Shelter that restores dignity
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-8">
                                We provide secure and nurturing spaces where survivors can find
                                immediate protection and begin their healing journey. Our shelters
                                offer more than just a roof.
                            </p>
                            <div className="flex items-center space-x-6">
                                <button className="bg-orange-600 cursor-pointer text-white font-semibold py-3 px-7 rounded-full hover:bg-orange-700 transition-colors duration-300 text-md">
                                    Learn more
                                </button>
                                <Link
                                    to={URLS.CONTACT}
                                    className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-md"
                                >
                                    Contact us
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Image Area */}
                        <div className="relative justify-self-center md:justify-self-end">
                            <img
                                src="/images/home2.png" // Placeholder image URL
                                alt="People embracing on a yellow blanket"
                                className="w-full max-w-md md:max-w-full h-auto rounded-lg object-cover shadow-lg"
                                style={{ aspectRatio: '1/1' }} // To ensure the image maintains a square aspect ratio
                            />
                        </div>
                    </div>
                </section>

                {/* section 3 */}
                <section className=" py-16 md:py-24">

                    <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">

                        {/* left Image Area */}
                        <div className="">
                            <img
                                src="/images/home3.png" // Placeholder image URL
                                alt="People embracing on a yellow blanket"
                                className="w-full max-w-md md:max-w-full h-auto rounded-lg object-cover shadow-lg"
                                style={{ aspectRatio: '1/1' }} // To ensure the image maintains a square aspect ratio
                            />
                        </div>
                        {/* right Content Area */}
                        <div className="text-left max-w-lg md:max-w-none mx-auto md:mx-0">
                            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                Healing
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                Counseling for emotional recovery
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-4">
                                Our professional counselors provide trauma-informed support to help survivors rebuild their emotional strength and resilience.
                            </p>
                            <div className="space-y-2">
                                {items.map((item, i) => (
                                    <div key={i} className="flex items-center space-x-2 mb-3 text-gray-400">
                                        {item.icon}
                                        <span className="text-[15px] font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center space-x-6 mt-6">
                                <button className="bg-orange-600 cursor-pointer text-white font-semibold py-3 px-7 rounded-full hover:bg-orange-700 transition-colors duration-300 text-md">
                                    Learn more
                                </button>
                                <Link
                                    to={URLS.CONTACT}
                                    className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-md"
                                >
                                    Contact us
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Sectionwraper>


            <div className='border-t-2 border-gray-200'>
                <Sectionwraper>
                    <p className='pt-5 font-semibold'><span className='pr-5'>01</span>Legal support</p>
                    {/* section 4 */}
                    <section className=" py-16 md:py-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content Area */}
                            <div className="text-left max-w-lg md:max-w-none mx-auto md:mx-0">
                                <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                    Justice
                                </p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                    Empowering survivors through legal advocacy
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 mb-8">
                                    We provide comprehensive legal support to help survivors navigate their rights and seek justice. Our team stands beside them every step of the way.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <button className="bg-orange-600 cursor-pointer text-white font-semibold py-3 px-7 rounded-full hover:bg-orange-700 transition-colors duration-300 text-md">
                                        Learn more
                                    </button>
                                    <Link
                                        to={URLS.CONTACT}
                                        className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-md"
                                    >
                                        Contact us
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image Area */}
                            <div className="">
                                <img
                                    src="/images/home2.png" // Placeholder image URL
                                    alt="People embracing on a yellow blanket"
                                    className="w-full max-w-md md:max-w-full h-auto rounded-lg object-cover shadow-lg"
                                    style={{ aspectRatio: '1/1' }} // To ensure the image maintains a square aspect ratio
                                />
                            </div>
                        </div>
                    </section>
                </Sectionwraper>
            </div>

            <div className='border-t-2 border-gray-200'>
                <Sectionwraper>
                    <p className='pt-5 font-semibold'><span className='pr-5'>02</span>Livelihood programs</p>
                    {/* section 4 */}
                    <section className=" py-16 md:py-16">
                        <div className=" grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content Area */}
                            <div className="text-left max-w-lg md:max-w-none mx-auto md:mx-0">
                                <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                    Empowerment
                                </p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                    Building economic independence
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 mb-8">
                                    Our skills training and economic support programs help survivors create sustainable futures and break cycles of vulnerability.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <button className="bg-orange-600 cursor-pointer text-white font-semibold py-3 px-7 rounded-full hover:bg-orange-700 transition-colors duration-300 text-md">
                                        Learn more
                                    </button>
                                    <Link
                                        to={URLS.CONTACT}
                                        className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-md"
                                    >
                                        Contact us
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image Area */}
                            <div className="">
                                <img
                                    src="/images/home4.png" // Placeholder image URL
                                    alt="People embracing on a yellow blanket"
                                    className="w-full max-w-md md:max-w-full h-auto rounded-lg object-cover shadow-lg"
                                    style={{ aspectRatio: '1/1' }} // To ensure the image maintains a square aspect ratio
                                />
                            </div>
                        </div>
                    </section>
                </Sectionwraper>
            </div>

            <div className='border-t-2 border-gray-200'>
                <Sectionwraper>
                    <p className='pt-5 font-semibold'><span className='pr-5'>03</span>Community support</p>
                    {/* section 4 */}
                    <section className=" py-16 md:py-16">
                        <div className=" grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content Area */}
                            <div className="text-left max-w-lg md:max-w-none mx-auto md:mx-0">
                                <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                    Connection
                                </p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                    Creating networks of support
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 mb-8">
                                    We build strong community connections that provide ongoing support, reducing isolation and fostering collective healing.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <button className="bg-orange-600 cursor-pointer text-white font-semibold py-3 px-7 rounded-full hover:bg-orange-700 transition-colors duration-300 text-md">
                                        Learn more
                                    </button>
                                    <Link
                                        to={URLS.CONTACT}
                                        className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-md"
                                    >
                                        Contact us
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image Area */}
                            <div className="">
                                <img
                                    src="/images/home5.png" // Placeholder image URL
                                    alt="People embracing on a yellow blanket"
                                    className="w-full max-w-md md:max-w-full h-auto rounded-lg object-cover shadow-lg"
                                    style={{ aspectRatio: '1/1' }} // To ensure the image maintains a square aspect ratio
                                />
                            </div>
                        </div>
                    </section>
                </Sectionwraper>
            </div>

            <Sectionwraper>
                <section className="py-16 md:pb-24 md:pt-40">
                    <div className=" text-center">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl  font-serif text-gray-900 leading-tight mb-6">
                        Join our mission of hope
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 mb-10 font-lora max-w-3xl mx-auto">
                           Every contribution helps us provide critical support and create meaningful change in survivors' lives.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-center space-x-4 mb-16">
                            <button className="bg-orange-600 cursor-pointer text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-700 transition-colors duration-300 text-lg">
                                Donate
                            </button>
                            <button className="bg-gray-100 cursor-pointer text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors duration-300 text-lg">
                                Volunteer
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div className=" mx-auto rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/home6.png" // Placeholder image URL
                                alt="Three children from Ghana smiling"
                                className="w-full h-[700px] object-cover"
                            />
                        </div>
                    </div>
                </section>
            </Sectionwraper>

            <Footer/>
            </Sectionwraper>
        </>
    );
};

export default Home
