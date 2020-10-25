import React from 'react';
import model from '../../assets/img/banner-model2.jpg'
const ProductBanner = () => {
    return (
        <React.Fragment>
            <div class="flex flex-wrap w-full mt-20 mb-0 flex-col items-center text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">NEW ON ReachNBuy</h1>
                <div className="flex">
                    <div class="w-64 h-1 bg-indigo-500 rounded mt-2 mb-0"></div>
                    <div class="w-24 h-1 bg-white rounded mt-2 mb-0"></div>
                    <div class="w-64 h-1 bg-indigo-500 rounded mt-2 mb-0"></div>
                </div>
            </div>
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img src={model} class="w-full object-cover lg:rounded" style={{height: "20em"}} />
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductBanner;