import React from 'react';
import "./Home.css";
import Product from "./Product.js"

function Home() {
    return (
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image" />

            <div className="home__row">
                <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SC_SY400_.jpg" rating={3} />
                <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Flass Bowl" price={239.99} image="https://m.media-amazon.com/images/I/71y+BAYVL5S._AC_UY327_FMwebp_QL65_.jpg" rating={4} />
            </div>

            <div className="home__row">
                <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                <Product id="23445930" title="Amazon Echo(3rd gen) | Smart speaker with Alexa, Charcoal Fabric" price={99.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
                <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver(4th Generation)" price={599.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
            </div>

            <div className="home__row">
                <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
            </div>
        </div>
    )
}

export default Home
