import React from 'react';
import CustomerRow2 from './CustomerRow2';

const place = "https://via.placeholder.com/150/FF0000/FFFFFF?text=";

const base = [
    {

        id: 1,
        name: "Emiliano Ocariz",
        picture: `${place}Emiliano`
    }
];

const Customers = ({
    data = base
}) => {
    return (
        <div>
            {data.map(i => <CustomerRow2 {...i}/>)}
        </div>
    );
};

export default Customers;