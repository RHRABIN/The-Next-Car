import React from 'react';

const Li = (props) => {
    const { name, route } = props.route;
    return (
        <div>
            <li className='mr-10'><a href={route}>{name}</a></li>
        </div>
    );
};

export default Li;