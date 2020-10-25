import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductBox from '../components/ProductBox';
import ProductList from '../components/ProductList';
import ProductGrid from '../components/ProductGrid';
import ProductBanner from '../components/ProductBanner';
import ProductGallery from '../components/ProductGallery';

const Landing = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='app-banner'>
                <Banner />
            </div>
            <div className='app-home-products'>
                <ProductList heading="DEALS OF THE DAY" />
            </div>
            <div className='app-home-products'>
                <ProductList heading="EXPLORE TOP SHOPPING SITES" />
            </div>
            <div className='app-home-product-banner'>
                <ProductBanner />
            </div>
            <div className='app-home-product-grid'>
                <ProductGrid />
            </div>
            <div className='app-home-product-gallery'>
                <ProductGallery />
            </div>
            <div className='app-home-product-BOX'>
                <ProductBox />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Landing;