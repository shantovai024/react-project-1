import React from 'react';
import './Menu.css'

const Menu = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        logo
                    </div>
                    <div className="col-md-10 menu-bar d-flex justify-content-end ">
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Cart <sup>{props.counts}</sup></li>
                            <li>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;