import React from 'react';
import Slider from "react-slick";
import './Partners.scss';
import coax from "../../../assets/images/logo/COAX.png";
import bvb from "../../../assets/images/logo/bvblogik.png";
import codeElves from "../../../assets/images/logo/CodeElves.png";
import coreValue from "../../../assets/images/logo/corevalue.png";
import devLight from "../../../assets/images/logo/devlight.png";
import eleks from "../../../assets/images/logo/Eleks.png";
import insilico from "../../../assets/images/logo/insilico.png";
import itCluster from "../../../assets/images/logo/it-cluster.png";
import itRally from "../../../assets/images/logo/ITRally.png";
import lcg from "../../../assets/images/logo/leadcapitalgroup.png";
import netFully from "../../../assets/images/logo/Netfully.jpg";
import softJourn from "../../../assets/images/logo/softjourn.png";
import softServe from "../../../assets/images/logo/softserve.png";
import tenantCloud from "../../../assets/images/logo/tenantcloud.png";
import ukietech from "../../../assets/images/logo/Ukietech.png";
import webmill from "../../../assets/images/logo/webmill.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Partners() {

    const settings = {
        dots: true,
        speed: 800,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,

                    speed: 800,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }],


        customPaging: i => (
            <div className='changeBack'

            >
            </div >
        )
    };


    const partnersOne = [
        bvb, coax, codeElves, coreValue, devLight, eleks, insilico, itCluster
    ];

    const partnersTwo = [
        itRally, lcg, netFully, softJourn, softServe, tenantCloud, ukietech, webmill
    ];

    return (
        <div className='Partners'>
            <Slider {...settings}>
                <div >
                    <div className="wrap">
                        {partnersOne.map(partner => <img key={partner} className='partner' src={partner} alt={partner} />)}
                    </div>
                </div>
                <div >
                    <div className="wrap">
                        {partnersTwo.map(partner => <img key={partner} className='partner' src={partner} alt={partner} />)}
                    </div>
                </div>
                {/* <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h1>2</h1>
                </div>
                <div>
                    <h1>3</h1>
                </div>
                <div>
                    <h1>4</h1>
                </div> */}
            </Slider>
        </div>
    )
}

export default Partners;
// import React, { Component } from 'react';
// import './Partners.scss';
// import Slider from "react-slick";

// import coax from "../../../assets/images/logo/COAX.png";
// import bvb from "../../../assets/images/logo/bvblogik.png";
// import codeElves from "../../../assets/images/logo/CodeElves.png";
// import coreValue from "../../../assets/images/logo/corevalue.png";
// import devLight from "../../../assets/images/logo/devlight.png";
// import eleks from "../../../assets/images/logo/Eleks.png";
// import insilico from "../../../assets/images/logo/insilico.png";
// import itCluster from "../../../assets/images/logo/it-cluster.png";
// import itRally from "../../../assets/images/logo/ITRally.png";
// import lcg from "../../../assets/images/logo/leadcapitalgroup.png";
// import netFully from "../../../assets/images/logo/Netfully.jpg";
// import softJourn from "../../../assets/images/logo/softjourn.png";
// import softServe from "../../../assets/images/logo/softserve.png";
// import tenantCloud from "../../../assets/images/logo/tenantcloud.png";
// import ukietech from "../../../assets/images/logo/Ukietech.png";
// import webmill from "../../../assets/images/logo/webmill.png";


// class Partners extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 800,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         dots: false,
//                         infinite: true,
//                         speed: 800,
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                     }
//                 }],


//             customPaging: i => (
//                 <div className='changeBack'

//                 >
//                 </div >
//             )
//         };


//         const partnersOne = [
//             bvb, coax, codeElves, coreValue, devLight, eleks, insilico, itCluster
//         ];

//         const partnersTwo = [
//             itRally, lcg, netFully, softJourn, softServe, tenantCloud, ukietech, webmill
//         ]

//         return (
//             <div className='Partners'>
//                 <Slider {...settings}>
//                     <div >
//                         <div className="wrap">
//                             {partnersOne.map(partner => <img className='partner' src={partner} />)}
//                         </div>
//                     </div>
//                     <div >
//                         <div className="wrap">
//                             {partnersTwo.map(partner => <img className='partner' src={partner} />)}
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//         )
//     }

// }

// export default Partners;
