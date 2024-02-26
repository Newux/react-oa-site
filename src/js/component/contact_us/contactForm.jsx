import React from "react";





export const ContactForm = () => {
    return (
        <div className="py-5" style={{ background: 'white', borderRadius: '5px', width: '400px' }}>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput" className="form-label " style={{ color: 'grey'}}>First Name</label>
                <input type="text" className="form-control " id="formGroupExampleInput" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput2" className="form-label" style={{ color: 'grey'}}>Last Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput" className="form-label" style={{ color: 'grey'}}>Work Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput2" className="form-label" style={{ color: 'grey'}}>Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput" className="form-label" style={{ color: 'grey'}}>Company</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="mb-3 mx-5">
                <label for="formGroupExampleInput2" className="form-label" style={{ color: 'grey'}}>Country</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" style={{ width: '300px' }} />
            </div>
            <div className="text-center">
                <a href="#" className="btn"
                    style={{
                        background: '#5257c6',
                        color: 'white',
                        width: '300px',
                        height: '40px',
                        marginTop: '25px',
                        borderRadius: '2px',
                        boxShadow: '0 1px 3px rgba(1,1,1,0.5)'
                    }}>
                    Start Now
                </a>
            </div>
        </div>
    );
};