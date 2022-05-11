import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className="home_row">
                <Product
                    id="1233421321"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />
                <Product
                    id="1234217321"
                    title="Jabra Elite 45h, Titanium Black – On-Ear Wireless Headphones with Up to 50 Hours of Battery Life"
                    price={65.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71GuE+NfnjL._AC_SX466_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1234221321"
                    title="Gorilla Mode Pre Workout - Massive Pumps · Laser Focus · Energy"
                    price={49.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51H-jxu58+L._AC_SX466_.jpg"
                />
                <Product
                    id="12342671321"
                    title="Sun Joe 24V-PS8-LTE 24-Volt 8-Inch, 14-Foot Reach, Cordless Telescoping Pole Chain Saw"
                    price={199.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/8129vY4-PuL._AC_SX466_.jpg"
                />
                <Product
                    id="12343421321"
                    title="Kellogg's Rice Krispies Treats, 60 bars"
                    price={25.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/715MAwPl3nL._SX679_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="1234221321"
                    title="Gorilla Mode Pre Workout - Massive Pumps · Laser Focus · Energy"
                    price={49.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51H-jxu58+L._AC_SX466_.jpg"
                />
            </div>
        </div>
    )
}

export default Home