import React from 'react';

const place = "https://via.placeholder.com/150/FF0000/FFFFFF?text=";

const base = [
    {

        id: 1,
        name: "Emiliano Ocariz",
        picture: `${place}Emiliano`
    },
];

const Customers = ({data = base}) => {
    return (
        <div>
            {data.map(i => (
                <div key={i.id}>
                    <h2>{i.name}</h2>
                    <img className='element-animation' src={i.picture} alt=""/>
                </div>
            ))
}
        </div>
    );
};

export default Customers;