import React from 'react';
import model1 from '../../assets/img/banner-model4.jpg';
import model2 from '../../assets/img/banner-model1.jpg';
import model3 from '../../assets/img/banner-model2.jpg';
import model4 from '../../assets/img/banner-model3.jpg';
const ProductGallery = () => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font mt-20">
                <div class="container px-5 py-0 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">BEST OF ReachNBuy
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </h1>
                        
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={model1} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={model2} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={model4} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={model3} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={model2} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={model1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductGallery;