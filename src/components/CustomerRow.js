import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"

const CustomerRow = ({id, name, picture}) => {
    return (
        <>
            <MediaQuery minDeviceWidth={500}>
                <div key={id}>
                    <h2>{name}!</h2>
                    <img className='element-animation' src={picture} alt=""/>
                </div>
            </MediaQuery>        
            <MediaQuery maxDeviceWidth={499}>
                <div className='customer-row' key={id}>
                    <h2>{name}</h2>
                </div>
            </MediaQuery>        
        </>
    );
};

export default CustomerRow;