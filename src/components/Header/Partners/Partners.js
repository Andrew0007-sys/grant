import React, { Component } from 'react';
import './Partners.scss';
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
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
//    const partnersOne = [
//        bvb, coax, codeElves, coreValue, devLight, eleks, insilico, itCluster 
//    ]
//    
//    const partnerTwo = [
//        itRally, lcg, netFully, softJourn, softServe, tenantCloud, ukietech, wtf
//    ]
    
    return (
      <div >    
        <Slider {...settings}>
        <span> 
        <p className='Partners'>
                <img className='partner' src = {coax} />
                <img className='partner' src = {bvb} />
                <img className='partner' src = {codeElves} />
                <img className='partner' src = {coreValue} />
                <img className='partner' src = {devLight} />
                <img className='partner' src = {eleks} />
                <img className='partner' src = {insilico} />
                <img className='partner' src = {itCluster} />  
            </p>
         </span>
         <div>
          <div className='Partners'>
                <img className='partner' src = {itRally} />
                <img className='partner' src = {lcg} />
                <img className='partner' src = {netFully} />
                <img className='partner' src = {softJourn} />
                <img className='partner' src = {softServe} />
                <img className='partner' src = {tenantCloud} />
                <img className='partner' src = {ukietech} />
                <img className='partner' src = {wtf} />  

          </div>
          </div>
        </Slider>
     </div>
    )
}

}

export default Partners;
