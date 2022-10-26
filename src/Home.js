import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <img className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt="Banner-Home"
            />

            <div className='home__row'>
                
                <Product id='1' title='Lazy Gardener Plantable Cracker Box (Only Crackers) Set of 1 Diwali Themed Seed Bombs Go Green This Diwali || Grow Your Crackers Seed Bombs'
                    price={649} rating={2}
                    image='	https://m.media-amazon.com/images/I/71zTypEjiAL._SY355_.jpg'
                />
                <Product id='2' title='Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm Extra Bass Driver and HD Sound with mic(Red)'
                    price={329} rating={4}
                    image='https://m.media-amazon.com/images/I/81FogXWyZPL._SX425_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product id='3' title='Apple iPhone 13 Pro (128GB) - Graphite'
                    price={109900} rating={5}
                    image='https://m.media-amazon.com/images/I/31smn8fDvrL._SY445_SX342_QL70_FMwebp_.jpg'
                />
                <Product id='4' title='Tata Tea Gold Saffron | Natural Saffron Flavour | Black Tea | 100g' price={76} rating={3}
                    image='https://m.media-amazon.com/images/I/61I0Um7U1VL._SX522_.jpg'
                />
                <Product id='5' title='Asian shoes Amy-91 Blue White Women Canvas Shoes 6UK/Indian'
                    price={348} rating={4}
                    image='	https://m.media-amazon.com/images/I/71GrF2oVQeL._UY500_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product id='6' title='Lenovo ThinkVision 34 inch VA Panel, Ultrawide Curved Monitor, WQHD Resolution I Height Adjustment & Pivot I USB-C, USB 3.1, HDMI 2.0, DisplayPort 1.2, Headphone/mic Combo, Raven Black, T34W-20'
                    price={49999} rating={5}
                    image='	https://m.media-amazon.com/images/I/71lgvsT9SqL._SX450_.jpg'                    
                />
            </div>
        </div>

    );
}

export default Home;