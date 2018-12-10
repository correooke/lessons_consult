import React from 'react';

const place = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=";

const data = [{

    id: 1, 
    name: "Allan Edgardo",
    picture: `${place}Allan`,
},
{

    id: 2, 
    name: "Jonathan David",
    picture: `${place}Jonathan`,
},
{

    id: 3, 
    name: "Erlin Samir",
    picture: `${place}Erlin`,
},
{

    id: 4, 
    name: "Karla",
    picture: `${place}Karla`,
}];

const Customers = () => {
    return (
        <div>
            {
                data.map(i => (
                    <div key={i.id}>
                        <h2>{i.name}</h2>
                        <img src={i.picture} alt=""/>
                    </div>
                ))
            }
        </div>
    );
};

export default Customers;