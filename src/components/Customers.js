import React from 'react';
import { scroller, Element } from 'react-scroll';
import CustomerRow from './CustomerRow';

const place = "https://via.placeholder.com/150/FF0000/FFFFFF?text=";

const base = [
    {
        id: 1,
        name: "Emiliano Ocariz",
        picture: `${place}Emiliano`
    }
];


const scroolType = {
    duration: 500,
    delay: 50,
    smooth: true,
    offset: -10, // Scrolls to element + 50 pixels down the page
  };


const Customers = ({
    data = base
}) => {
    const onClick = id => {
        debugger;
        const item = data.filter(d => d.id === id)[0];
        const toScroll = data[data.indexOf(item) + 1];
        if (toScroll) {
            scroller.scrollTo(toScroll.id.toString(), scroolType);
            console.log(toScroll.id.toString());
            console.log("id:" + id);
        } else {
            scroller.scrollTo(data[0].id.toString());
        }

    };
    return (
        <div className='customers-list'>
            {data.map(i => 
                <Element key={i.id} name={i.id.toString()}>
                    <CustomerRow {...i} onClick={ () => onClick(i.id)}/>
                </Element>)}
        </div>
    );
};

export default Customers;