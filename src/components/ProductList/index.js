import React from 'react';
import PropTypes from "prop-types";
import model1 from '../../assets/img/banner-model4.jpg';
import model2 from '../../assets/img/banner-model1.jpg';
import model3 from '../../assets/img/banner-model2.jpg';
import model4 from '../../assets/img/banner-model3.jpg';
const ProductList = (props) => {
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font mt-20">
                <div class="container px-5 py-2 mx-auto">
                    <div class="flex flex-wrap w-full mb-10">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{props.heading}</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/4 p-2">
                            <div class="p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={model1} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/4 p-2">
                            <div class="p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={model2} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/4 p-2">
                            <div class="p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={model3} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/4 p-2">
                            <div class="p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={model4} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

ProductList.propTypes = {
    heading: PropTypes.string.isRequired
 };

export default ProductList;