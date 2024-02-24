import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


//include images into your bundle

import webPortal from "../../img/webPortal.png";
import Tracking from "../../img/tracking.png";
import linkIcon from "../../img/linkIcon.png";
import warehouse from "../../img/warehouse.png";
import creditCard from "../../img/creditCard.png";

import custAlerts from "../../img/custAlerts.png";
import docMan from "../../img/docMan.png";
import integrations from "../../img/integrations.png";
import packProc from "../../img/packProc.png";
import EXIM from "../../img/EXIM.png";


//create your first component
export const BlockTwo = () => {
    return (
        <div className="container body" style={{ background: "#ffffff", height: "700px", marginTop: "190px" }}>
            <div>
                <p className="test" style={{ marginTop: "250px", color: '#4ca1f9', marginLeft: '100px' }}>FEATURES</p>
                <h1 style={{ marginTop: "25px", color: '#37465a', marginLeft: '100px' }} >All the key features you need in one place</h1>
                <p style={{ marginTop: "25px", color: '#37465a', marginLeft: '100px', width: '1050px' }} >Strategically align your company with a software designed for you. Offering the most tailored, comprehensive platform on the market which has been tried and proven. True to our value proposition, we take the manual work away so that you can focus on building your business.</p>
            </div>

            <div className="container text-center my-5" style={{ width: "1120px" }}>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={Tracking} width="50px" style={{ marginTop: "23px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>End to End Tracking</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={linkIcon} width="50px" style={{ marginTop: "24px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>BESW Integration</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={warehouse} width="50px" style={{ marginTop: "24px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>US Warehousing</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={webPortal} width="50px" style={{ marginTop: "22px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Customer Portal</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={creditCard} width="50px" style={{ marginTop: "32px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Online Payments</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={docMan} width="50px" style={{ marginTop: "25px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Document Management</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={integrations} width="50px" style={{ marginTop: "25px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>API Integrations</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={packProc} width="90px" style={{ marginTop: "5px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Package Processing</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={custAlerts} width="50px" style={{ marginTop: "25px" }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Customer Alerts</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#ffffff', height: '150px', borderRadius: '5px' }}>
                            <div className="circle" style={{ background: '#E5E3E3', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px' }}><img src={EXIM} width="65px" style={{ marginTop: "15px", marginLeft: '5px' }} /></div>
                            <p className="" style={{ marginTop: '5px' }}>Delivery to Export Point</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <a href="#" className="btn"
                    style={{
                        background: '#5257c6',
                        color: 'white',
                        width: '170px',
                        height: '40px',
                        marginTop: '25px',
                        borderRadius: '2px',
                        boxShadow: '0 1px 3px rgba(1,1,1,0.5)'
                    }}>
                    More Details
                </a>
            </div>
        </div>

    );
};


