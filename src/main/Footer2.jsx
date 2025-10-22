import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';
import Sectionwraper from './Sectionwraper';

const Footer = () => {
    return (
        <Sectionwraper>
            <footer className="pt-16 pb-8 font-sans">
                <div className="container mx-auto">
                    <div className="bg-gray-200 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left lg:col-span-2">
                            {/* Logo */}
                            <Link to={URLS.HOME} className="flex items-center justify-center sm:justify-start mb-3">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="h-16 sm:h-20 w-auto mx-auto sm:mx-0"
                                />
                            </Link>

                            {/* Description */}
                            <p className="text-gray-700 text-sm sm:text-md mb-4 max-w-xs sm:max-w-none">
                                Stay connected with stories of hope and progress
                            </p>

                            {/* CHANGE 3: 
                                'sm:flex-row' aur 'sm:gap-0' ko hata diya taake form hamesha 'flex-col' (stacked) rahe.
                            */}
                            <div className="flex w-full max-w-xs sm:max-w-md mb-3 gap-2">
                                {/* CHANGE 4: 
                                    Input se 'rounded-full', 'sm:rounded-l-full', 'sm:rounded-r-none' hata kar 'rounded-lg' lagaya.
                                    'sm:flex-grow' bhi hata diya.
                                */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-lg bg-gray-200 border shadow-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800 text-sm"
                                />
                                {/* CHANGE 5: 
                                    Button se 'rounded-full', 'sm:rounded-r-full', 'sm:rounded-l-none' hata kar 'rounded-lg' lagaya.
                                */}
                                <button className="bg-gray-200 cursor-pointer text-gray-800 font-medium py-3 px-6 rounded-full hover:bg-gray-300 transition-colors duration-200">
                                    Subscribe
                                </button>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-gray-500 text-xs leading-relaxed max-w-xs sm:max-w-sm">
                                By subscribing, you agree to our{' '}
                                <a href="#" className="underline hover:text-orange-600">
                                    privacy policy
                                </a>{' '}
                                and consent to receive updates.
                            </p>
                        </div>


                        {/* CHANGE 6: 
                            Column 2 se 'lg:ml-20' hata diya. Grid gap ab spacing khud sambhal lega.
                        */}
                        <div className="text-center sm:text-left ml-0 md:ml-20">
                            <h3 className="text-lg font-semibold text-gray-800 mb-5">Quick Links</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>
                                    <Link to={URLS.HOME} className="hover:text-orange-600 transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={URLS.SERVICES} className="hover:text-orange-600 transition-colors">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to={URLS.ABOUT} className="hover:text-orange-600 transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={URLS.CONTACT} className="hover:text-orange-600 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        Donate
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* CHANGE 7: 
                            Column 3 se 'lg:ml-10' hata diya.
                        */}
                        <div className="text-center sm:text-left ml-0 md:ml-20">
                            <h3 className="text-lg font-semibold text-gray-800 mb-5">Resources</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        DOVVSU
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        WILDAF
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        Ministry of Health
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        Emergency: 911
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-orange-600 transition-colors">
                                        Partners
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* CHANGE 8: 
                            Column 4 se 'lg:ml-8' hata diya.
                        */}
                        <div className="text-center sm:text-left ml-0 md:ml-20">
                            <h3 className="text-lg font-semibold text-gray-800 mb-5">Connect</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center sm:justify-start hover:text-orange-600 transition-colors"
                                    >
                                        <FaFacebookF className="w-5 h-5 mr-3" />
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center sm:justify-start hover:text-orange-600 transition-colors"
                                    >
                                        <FaInstagramSquare className="w-5 h-5 mr-3" />
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center sm:justify-start hover:text-orange-600 transition-colors"
                                    >
                                        <FaXTwitter className="w-5 h-5 mr-3" />
                                        X
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center sm:justify-start hover:text-orange-600 transition-colors"
                                    >
                                        <FaLinkedinIn className="w-5 h-5 mr-3" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center sm:justify-start hover:text-orange-600 transition-colors"
                                    >
                                        <FaYoutube className="w-5 h-5 mr-3" />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm border-t border-gray-200 pt-6 text-center sm:text-left">
                        <p className="mb-4 sm:mb-0">
                            &copy; {new Date().getFullYear()} Beacon of New Beginnings
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-orange-600 transition-colors">
                                Cookies Settings
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Sectionwraper>
    );
};

export default Footer;