import React, { useState, useRef } from 'react';
import logo from './amazon-dark-logo-png-transparent.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HeaderBottom from './HeaderBottom';
import axios from 'axios';
const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showRadioDropdown, setShowRadioDropdown] = useState(false);
    const [accountList, setaccountList] = useState(false);
    const fileInputRef = useRef(null);

    const [showIconDropdown, setShowIconDropdown] = useState(false);

    const toggeAccountList = () => {
        setaccountList(!accountList);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleRADIODropdown = () => {
        setShowRadioDropdown(!showRadioDropdown);
    };

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Prepare FormData to send to backend
            const formData = new FormData();
            formData.append('image', file);

            // Send formData to backend (API endpoint or server)
            fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle response from backend if needed
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    };
    const toggleIconDropdown = () => {
        setShowIconDropdown(!showIconDropdown);
    };
    const handleDocumentScannerClick = () => {
        // Make HTTP request to backend API
        axios.get('http://localhost:5000/api/run-detection')
        .then(response => {
            console.log(response);
            const search_terms = response.data.searchTerms.slice(0, 2); // Limit to first 2 words
            const amazonUrl = `https://www.amazon.in/s?k=${search_terms.join('+')}`;
            // const amazonUrl = `https://www.amazon.com/s?k={'+'.join${search_terms}}`;
            window.open(amazonUrl, '_blank'); // Open in new tab
          })
          .catch(error => {
            console.error('Error running detection:', error);
          });
      };

    return (
        <>
            <div className='bg-[#231f20] flex items-center gap-5'>
                <div className='flex items-center'>
                    <div className='image hover:border-2 border-white'>
                        <img src={logo} width="100px" height="20px" alt="Amazon Logo" />
                    </div>

                    <div className='flex flex-row text-white items-center gap-3 px-2 hover:border-2 border-white cursor-pointer'>
                        <LocationOnIcon />
                        <div className='flex flex-col'>
                            <p className='text-xs'>Deliver to</p>
                            <p className='font-bold'>Coimbatore 641008</p>
                        </div>
                    </div>
                </div>

                <div className="input-grp flex items-center relative flex-grow">
                    <p className="bg-gray-200 p-2 w-13 h-11" onClick={toggleDropdown}>All <ArrowDropDownIcon /></p>
                    {showDropdown && (
                        <ul className="absolute top-0 left-0 bg-white shadow-md py-2 mt-1 rounded-md h-[20rem] overflow-auto z-50">
                            {/* Dropdown list items */}
                            <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">All Departments</li>
                            <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Arts & Crafts</li>
                            <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Automotive</li>
                            <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Baby</li>
                            <li value="search-alias=beauty-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Beauty & Personal Care</li>
                            <li value="search-alias=stripbooks-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Books</li>
                            <li value="search-alias=fashion-boys-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Boys' Fashion</li>
                            <li value="search-alias=computers-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Computers</li>
                            <li value="search-alias=deals-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Deals</li>
                            <li value="search-alias=electronics-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Electronics</li>
                            <li value="search-alias=fashion-girls-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Girls' Fashion</li>
                            <li value="search-alias=hpc-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Health & Household</li>
                            <li value="search-alias=kitchen-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Home & Kitchen</li>
                            <li value="search-alias=industrial-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Industrial & Scientific</li>
                            <li value="search-alias=luggage-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Luggage</li>
                            <li value="search-alias=fashion-mens-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Men's Fashion</li>
                            <li value="search-alias=movies-tv-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Movies & TV</li>
                            <li value="search-alias=music-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Music, CDs & Vinyl</li>
                            <li value="search-alias=pets-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Pet Supplies</li>
                            <li value="search-alias=software-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Software</li>
                            <li value="search-alias=sporting-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Sports & Outdoors</li>
                            <li value="search-alias=tools-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Tools & Home Improvement</li>
                            <li value="search-alias=toys-and-games-intl-ship" className="px-3 hover:bg-gray-100 cursor-pointer">Toys & Games</li>
                            <li value="search-alias=videogames-intl-ship" className="px-3 hover:bg-gray-100 cursor-pointer">Video Games</li>
                            <li value="search-alias=fashion-womens-intl-ship" className="px-3 hover:bg-gray-100 cursor-pointer">Women's Fashion</li>
                        </ul>
                    )}
                    {/* <div className="relative flex-grow">
                        <input type="text" className="font-normal w-full h-11 pl-10" placeholder="Search..." />
                        <CameraAltIcon className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={handleCameraClick} />
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleFileUpload} // handle the file input change event
                            // onChange={(e) => console.log(e.target.files[0])}
                        />
                    </div> */}
                      <div className="relative flex-grow">
            <input type="text" className="font-normal w-full h-11 pl-10" placeholder="Search..." />
            <PhotoCameraIcon className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={toggleIconDropdown} />
            {showIconDropdown && (
                <ul className="absolute left-2 top-10 bg-white shadow-md py-2 rounded-md z-50">
                    <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={handleCameraClick}>
                        <FileUploadIcon className="mr-2" /> Upload file
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                        <CameraAltIcon className="mr-2" onClick={handleDocumentScannerClick}/> Camera
                    </li>
                </ul>
            )}
            <input 
                type="file" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileUpload} 
            />
        </div>
                    <p className="bg-orange-300 text-2xl p-1.5 hover:bg-orange-200 cursor-pointer"><SearchIcon /></p>
                </div>

                <div className='flex items-center text-white relative'>
                    <p className='mr-4 hover:border-2 border-white cursor-pointer'>EN
                        <span className='' onClick={toggleRADIODropdown} onMouseEnter={toggleRADIODropdown} >
                            <ArrowDropDown />
                        </span>
                        {showRadioDropdown && (
                            <ul className="absolute top-full left-0 bg-white text-black shadow-md py-2 mt-1 rounded-md z-50">
                                {/* Dropdown list items */}
                                <div className='flex pb-2 px-3 gap-3'>
                                    <p className='text-sm'>Change Languages</p>
                                    <p className='underline text-xs text-blue-600'>Learn More</p>
                                </div>

                                <li className="px-3 hover:bg-gray-100 cursor-pointer">
                                    <label className="flex items-center">
                                        <input type="radio" name="language" value="english" className="mr-2" />
                                        English -EN
                                    </label>
                                    <hr className='mx-5 my-3' />
                                </li>
                                <li className="px-3 hover:bg-gray-100 cursor-pointer">
                                    <label className="flex items-center">
                                        <input type="radio" name="language" value="spanish" className="mr-2" />
                                        Spanish -SN
                                    </label>
                                </li>
                                <li className="px-3 hover:bg-gray-100 cursor-pointer">
                                    <label className="flex items-center">
                                        <input type="radio" name="language" value="french" className="mr-2" />
                                        French -FN
                                    </label>
                                </li>
                                <li className="px-3 hover:bg-gray-100 cursor-pointer">
                                    <label className="flex items-center">
                                        <input type="radio" name="language" value="cebuano" className="mr-2" />
                                        Cebuano -CN
                                    </label>
                                </li>
                                <li className="px-3 hover:bg-gray-100 cursor-pointer">
                                    <label className="flex items-center">
                                        <input type="radio" name="language" value="berber" className="mr-2" />
                                        Berber -Br
                                    </label>
                                </li>
                                <hr className='mx-5 my-3' />
                                <div className='flex pb-2 px-3 gap-3'>
                                    <p className='text-sm'>Change Languages</p>
                                    <p className='underline text-xs text-blue-600'>Learn More</p>
                                </div>
                                <hr className='mx-5 my-3' />
                                <div className='flex justify-between my-2 mx-2 text-sm'>
                                    <p>$ - USD - US Dollar</p>
                                    <p className='text-blue-600'>Change</p>
                                </div>
                                <p className='mx-2 text-sm my-2'> You are shopping on Amazon.com</p>
                                <p className='text-blue-600 mx-2 text-sm text-center'>Change Country Region</p>
                            </ul>
                        )}
                    </p>

                    <div className='flex flex-col mr-4 hover:border-2 border-white cursor-pointer' onMouseEnter={toggeAccountList}>
                        <p className='font-thin text-sm'>Hello Sign in </p>
                        <p className='font-bold'>Account & Lists <span><ArrowDropDownIcon /></span></p>

                        {accountList && (
                            <div className='absolute top-full left-[-63px] bg-white text-black shadow-md py-2 mt-1 rounded-md z-50'>
                                <div className='head flex flex-col justify-center item-center'>
                                    <button className='bg-yellow-300 mt-7 px-2 py-1 mx-16 text-black'>Sign in</button>
                                    <p className='text-xs text-black text-center mt-1 mb-4'>
                                        New Customer?
                                        <span className='text-blue-600 text-xs'>Start Here</span>
                                    </p>
                                </div>
                                <div className='content flex border-t-2 border-t-gray-200'>
                                    <div className='text-black left w-[220px]'>
                                        <h2 className='font-bold mx-3'>Your List</h2>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Create a List
                                        </p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Find a List or Registry</p>
                                    </div>
                                    <div className='right text-black border-l-2 border-gray-200'>
                                        <h2 className='font-bold mx-3'>
                                            Your Account
                                        </h2>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Account</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Orders</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Recommendations</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Browsing History</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Watchlist</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Video Purchases & Rentals</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Kindle Unlimited</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Content & Devices</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Subscribe & Save Items</p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Memberships & Subscriptions
                                        </p>
                                        <p className='mx-3 my-1 text-sm hover:text-orange-500 hover:underline'>
                                            Music Library
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col mr-4 hover:border-2 border-white cursor-pointer'>
                        <p className='font-thin text-sm'>Returns </p>
                        <p className='font-bold'> & Order</p>
                    </div>

                    <div className='flex flex-col hover:border-2 border-white cursor-pointer'>
                        <p className='font-bold'><AddShoppingCartIcon /> Cart</p>
                    </div>
                </div>
            </div>

            <HeaderBottom />
        </>
    );
};

export default Header;

