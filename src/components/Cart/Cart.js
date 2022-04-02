import React from 'react';

const Cart = ({ cart, handleToRemove }) => {


    let order = '';
    if (cart.length === 0) {
        order = <p>Please add at least one item!!</p>
    }
    else if (cart.length === 1) {
        order = <p>Please add more</p>
    }
    else {
        order = <p>Thanks for add more</p>
    }

    return (
        <div>
            <h1>This is cart file</h1>
            {/* {(cart.length < 4 ? <p>Hello add more</p> : <button>clear all</button>)} */}
            {/* {(cart.length === 0 || <p>Hello this is perfect</p>)} */}
            {(cart.length >= 0) && <div style={{ backgroundColor: 'yellow', width: '50%', margin: '0 auto', height: '30px' }}>{order}</div>}
            {
                cart?.map(shirt =>
                    <h4>{shirt?.name}
                        <button style={{ marginLeft: '10px', background: 'red', cursor: 'pointer' }} onClick={() => handleToRemove(shirt)}>X</button>

                    </h4>)
            }

        </div>
    );
};

export default Cart;