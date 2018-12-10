import React from 'react';
import StandardFrame from './StandardFrame';
import Customers from './Customers';


const MainPage = ({data}) => {
    return (
        <StandardFrame>
            <Customers data={data}></Customers>
        </StandardFrame>
    );
};

export default MainPage;