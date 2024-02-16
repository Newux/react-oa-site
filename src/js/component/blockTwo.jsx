import React from "react";


//include images into your bundle



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
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px'}}>
                            <div className="circle" style={{ background: '#ffffff', height: '100px', width: '100px', borderRadius: '150px', marginLeft: '40px'}}></div>
                            <p className="" style={{ marginTop: '5px'}}>End to End Tracking</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>BESW Integration</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>US Warehousing</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Customer Portal</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Online Payments</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Document Management</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>API Integrations</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Package Processing</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Customer Alerts</div>
                    </div>
                    <div className="col">
                        <div className="p-3" style={{ background: '#F6B600', height: '150px', borderRadius: '5px' }}>Delivery to Export Point</div>
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


