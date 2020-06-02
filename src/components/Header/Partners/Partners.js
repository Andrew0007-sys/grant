import React, { Component } from 'react';
import './Partners.scss';
import './Slick.scss';
import Slider from "react-slick";

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
import wtf from "../../../assets/images/logo/wtf.png";


class Partners extends Component {
    render() {
     const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "light",
            borderRadius: "10px",    
          }}
        >
          <ul style={{ margin: "-10px" 
                     }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "20px",
            height: "20px",
//            marginTop: "20px",
            color: "black",
            borderRadius: "10px",
            border: "2px gray solid"
          }}
        >
        </div>
      )
    };
    
    
    const partnersOne = [
        bvb, coax, codeElves, coreValue, devLight, eleks, insilico, itCluster 
    ];
    
    const partnersTwo = [
        itRally, lcg, netFully, softJourn, softServe, tenantCloud, ukietech, wtf
    ]

    return (
      <div>    
        <Slider {...settings}>
            <div className='Partners'>
                <div className="wrap">
                    {partnersOne.map(partner => <img className='partner' src={partner} />)}
                </div>
            </div>
            <div className='Partners'>
                <div className="wrap">
                    {partnersTwo.map(partner => <img className='partner' src={partner} />)}
                </div>
            </div>
        </Slider>
     </div>
    )
}

}

export default Partners;
