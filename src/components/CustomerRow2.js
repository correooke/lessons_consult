import React from 'react';
import MediaQuery from 'react-responsive';

// query="(min-device-width: 1224px)"

const CustomerRow2 = ({id, name, picture}) => {
    return (
        <>
            <MediaQuery minDeviceWidth={500}>
                {
                    matches => {
                        if (matches) {
                            return (<div key={id}>
                                <h2>{name}!</h2>
                                <img className='element-animation' src={picture} alt=""/> 
                            </div>);
                        } else {
                            return (
                            <div className='customer-row' key={id}>
                                <h2>Nombre: {name}</h2>
                            </div>);
                        }
                    }
                }
            </MediaQuery>        
        </>
    );
};

export default CustomerRow2;