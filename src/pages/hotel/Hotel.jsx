import './hotel.css';
import Navbar from './../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Mail from './../../components/mail/Mail';
import Footer from './../../components/footer/Footer';
import { useState } from 'react';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openImg, setOpenImg] = useState(false);

    const photos = [
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max500/399697732.jpg?k=f1029e957bafe0c1c7df51b91a7547fdb448b9d7d828f4c0eede237e3695e190&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max500/399697691.jpg?k=4c2a99697ae123238b1209964870c3559126291b3d9df357b0bd93e4009c623a&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/399697719.jpg?k=f3fb422876de79e28d4f42e833b6eb1c47e31d22e3adacb86e54529ae8e32724&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max300/399697703.jpg?k=2238c91b9b1d8538547b53afcdeace9e984981b68361745e9848fd5265e32d57&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max300/399697707.jpg?k=cf765bbd92e271990a87399990eeb35165d6353eb5fe59529e772f737d263473&o=&hp=1',
        },
        {
            src: 'https://cf.bstatic.com/xdata/images/hotel/max300/399697667.jpg?k=5b943f248083d1a53d799d755a9020b51e991ddbcb0b157fa4c7e72e6ae9a912&o=&hp=1',
        },
    ];

    const handleOpenImg = (index) => {
        setSlideNumber(index);
        setOpenImg(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else if (direction === 'r') {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {openImg && (
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpenImg(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')} />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')} />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Book Now!</button>
                    <h1 className="hotelTitle">HANZ Chuong Hotel Dalat 42 Ha Huy Tap</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} className="hotelAddressIcon" />
                        <span>42a Ha Huy Tap Street, Ward 3, Da Lat, Vietnam</span>
                    </div>
                    <span className="hotelDistance">Good location - 500 from center</span>
                    <span className="hotelPriceHighlight">
                        Book a stay over VND 450.000 at this property and get a free parking
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpenImg(index)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">
                                HANZ Chuong Hotel Dalat 42 Ha Huy Tap has been welcoming Booking.com guests since 6 Oct
                                2022.
                            </h1>
                            <p className="hotelDesc">
                                You are eligible for Genius discount at HANZ Chuong Hotel Dalat 42 Ha Huy Tap! To save
                                at this property, simply sign in. Located in Da Lat and close to Lam Vien Square, Yersin
                                Park Da Lat and Xuan Huong Lake, HANZ Front Chuong Hotel Dalat features free WiFi, a
                                garden and a terrace. The apartment is 3.2 km from Dalat Flower Gardens and 3.6 km from
                                Dalat Palace Golf Club. The nearest airport is Lien Khuong Airport, 29 km from HANZ
                                Front Chuong Hotel Dalat. This is our guests' favorite part of Da Lat, according to
                                independent reviews.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Highlights of the property</h1>
                            <span>Perfect for a 2 night stay!</span>
                            <h2>
                                <b>VND 450.672</b> (2 night)
                            </h2>
                            <button>Book Now!</button>
                        </div>
                    </div>
                </div>
                <Mail />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;
